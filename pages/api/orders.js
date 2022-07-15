import { connectToDatabase } from "../../lib/db";

async function handler(req, res){

    if(req.method === 'POST'){

        const {orders} = req.body;

        const client = await connectToDatabase();
        const db = client.db();
        const result = await db.collection('orders').insertMany(orders);

        res.status(201).json({message : 'Orders done !'})
        client.close();

    }
}

export default handler;