import { hash } from "bcryptjs";
import { connectToDatabase } from "../../../lib/db";


async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body;
        const {username, email, password} = data;
        const client = await connectToDatabase();
        const db = client.db();

        const emailExist = await db.collection('users').findOne({email});

        if(emailExist){
            res.status(422).json({message : 'User already exist'});
            client.close();
            return;
        }

        const hashedPassword = await hash(password, 10);
        const newUser = {
            username,
            email,
            password : hashedPassword
        }
        const result = await db.collection('users').insertOne(newUser);
        res.status(201).json({message : 'Created user .'});
        client.close();

    }
}

export default handler;