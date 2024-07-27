const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;
const colName = process.env.MONGODB_COL_APPLICATIONS;

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
    } else {
        res.setHeader("Allow", ["GET"]);
        res.status(405).end("Method Not Allowed");
    }
}
