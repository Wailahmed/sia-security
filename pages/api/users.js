const { MongoClient, ObjectId } = require("mongodb");

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;
const colName = process.env.MONGODB_COL_USERS;

export default function handler(req, res) {
    if (req.method === "GET") {
        const getData = async () => {
            let client;
            try {
                client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
                await client.connect();
                const db = client.db(dbName);
                const col = db.collection(colName);
                const data = await col.find({}).toArray();
                res.status(200).json(data);
            } catch (err) {
                console.error("Failed to get data: ", err);
                res.status(500).json({ message: "Failed to get data" });
            } finally {
                // Ensure that the client will close when you finish/error
                if (client) {
                    await client.close();
                }
            }
        };
        getData();
    } 
/*     else if (req.method === "DELETE") {
        const removeData = async () => {
            let client;
            try {
                client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
                await client.connect();
                const db = client.db(dbName);
                const col = db.collection(colName);
                const { userId } = req.query;
                console.log(userId);
                const response = await col.deleteOne({ _id: userId })
                if (response.deletedCount === 1) {
                    res.status(200).json({ message: 'Job successfully deleted' });
                  } else {
                    res.status(404).json({ message: 'No job found with that ID' });
                  } 
            } catch (err) {
                console.error("Failed to remove data: ", err);
                res.status(500).json({ message: "Failed to remove data", err });
            } finally {
                // Ensure that the client will close when you finish/error
                if (client) {
                    await client.close();
                }
            }
        };
        removeData();
    }
     */
    else {
        res.setHeader("Allow", ["GET"]);
        res.status(405).end("Method Not Allowed");
    }
}
