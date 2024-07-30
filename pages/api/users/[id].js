const { MongoClient, ObjectId } = require("mongodb");

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;
const colName = process.env.MONGODB_COL_USERS;

export default function handler(req, res) {
    const { query: { id }, method } = req;

    if (method === "GET") {
        const getData = async () => {
            let client;
            try {
                client = new MongoClient(uri);
                await client.connect();
                const db = client.db(dbName);
                const col = db.collection(colName);

                if (!ObjectId.isValid(id)) {
                    return res.status(400).json({ message: "Invalid ID format" });
                }

                const data = await col.findOne({ _id: new ObjectId(id) });
                if (data) {
                    res.status(200).json(data);
                } else {
                    res.status(404).json({ message: "No data found with that ID" });
                }
            } catch (err) {
                console.error("Failed to get data: ", err);
                res.status(500).json({ message: "Failed to get data", error: err.message });
            } finally {
                if (client) {
                    await client.close();
                }
            }
        };
        getData();
    } 
    else if (method === "DELETE") {
        const removeData = async () => {
            let client;
            try {
                client = new MongoClient(uri);
                await client.connect();
                const db = client.db(dbName);
                const col = db.collection(colName);

                if (!ObjectId.isValid(id)) {
                    return res.status(400).json({ message: "Invalid ID format" });
                }

                const data = await col.deleteOne({ _id: new ObjectId(id) });
                if (data) {
                    res.status(200).json(data);
                } else {
                    res.status(404).json({ message: "No data found with that ID" });
                }
            } catch (err) {
                console.error("Failed to get data: ", err);
                res.status(500).json({ message: "Failed to get data", error: err.message });
            } finally {
                if (client) {
                    await client.close();
                }
            }
        };
        removeData();
    }
    else if (method === "PUT") {
        const putData = async () => {
            let client;
            try {
                client = new MongoClient(uri);
                await client.connect();
                const db = client.db(dbName);

                const { name, email, role } = req.body;
                try {
                    const result = await db.collection('users').updateOne(
                        { _id: new ObjectId(id) },
                        { $set: { name, email, role } }
                    );
                    if (result.modifiedCount === 0) {
                        return res.status(404).json({ message: 'No user found with that ID' });
                    }
                    res.status(200).json({ message: 'User updated successfully' });
                } catch (error) {
                    res.status(500).json({ message: 'Failed to update user', error });
                }
            } catch (err) {
                console.error("Failed to get data: ", err);
                res.status(500).json({ message: "Failed to get data", error: err.message });
            } finally {
                if (client) {
                    await client.close();
                }
            }
        };
        putData();
    }
    else if (method === "POST") {
        const addData = async () => {
            let client;
            try {
                client = new MongoClient(uri);
                await client.connect();
                const db = client.db(dbName);


            }
        }
    }
    else {
        res.setHeader("Allow", ["GET"]);
        res.status(405).end("Method Not Allowed");
    }
}