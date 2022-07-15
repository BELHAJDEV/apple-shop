import { connectToDatabase } from "../../../lib/db";

async function handler(req, res){

    if(req.method === 'POST'){
        const { email } = req.body;

        const client = await connectToDatabase();
        const db = client.db();

        const user = await db.collection('users').findOne({email});

        if(!user){
            client.close();
            throw new Error('No user !');
        }

        res.status(201).json({
            user : {
                username : user.username, 
                email : user.email
            }});
        client.close();
    }
}

export default handler;