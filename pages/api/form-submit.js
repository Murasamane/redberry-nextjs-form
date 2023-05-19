import { MongoClient } from "mongodb";
// mongodb+srv://giorgigurgenidze133:E2s8IJYgHXhVaseP@cluster0.mv9ohhm.mongodb.net/redberryForm?retryWrites=true&w=majority

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://giorgigurgenidze133:E2s8IJYgHXhVaseP@cluster0.mv9ohhm.mongodb.net/redberryForm?retryWrites=true&w=majority"
    );

    const db = client.db();

    const informationCollection = db.collection('forms');

    const result = await informationCollection.insertOne(data);

    console.log(result);
    client.close()
  }
}

export default handler;
