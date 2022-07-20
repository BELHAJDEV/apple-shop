import { connectToDatabase } from "../../lib/db";

async function handler(req, res){
    if(req.method === 'POST'){
        const { email } =  req.body;
    
        const client = await connectToDatabase();

        const db = client.db();
        const ordersCollection = db.collection('orders');
        if(email === ''){
            return;
        }

        const user = await db.collection('users').findOne({email});

        if(user.isAdmin){
            let orders = await ordersCollection.find().sort('-date').toArray();
            res.status(201).json({orders : orders});
            client.close();
        }else{
            let orders = await ordersCollection.find({clientEmail : email}).toArray();
       
            if(orders.length === 0){
                return;
            }
    
    
            res.status(201).json({orders : orders});
            client.close();
        }

        
        
    }
}

export default  handler;