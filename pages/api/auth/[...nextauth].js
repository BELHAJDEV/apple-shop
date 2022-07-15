import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from '../../../lib/db';
import { compare } from 'bcryptjs';

export default NextAuth({
    session : {
        jwt : true
    },
    providers : [
        CredentialsProvider({
            async authorize(credentials){

                const client = await connectToDatabase();
                const usersColection = client.db().collection('users');

                const user = await usersColection.findOne({email : credentials.email});

                if(!user){
                    client.close();
                    throw new Error('No user found !');
                }

                const passwordCorrect = await compare(credentials.password,user.password);

                if(!passwordCorrect){
                    client.close();
                    throw new Error('You could not login !');
                }

                client.close();

                return {
                    username : user.username,
                    email : user.email
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
})