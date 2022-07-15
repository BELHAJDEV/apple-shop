import { MongoClient } from "mongodb";


export async function connectToDatabase(){
    const mongodbString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.eib9h.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    // const client = await MongoClient.connect('mongodb+srv://chafik:password2000@apple-shop-nextjs-clust.eib9h.mongodb.net/Apple-Shop?retryWrites=true&w=majority')
    const client = await MongoClient.connect(mongodbString);
    return client;
}