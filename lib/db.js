import { MongoClient } from "mongodb";


export async function connectToDatabase(){
    const client = await MongoClient.connect('mongodb+srv://chafik:password2000@apple-shop-nextjs-clust.eib9h.mongodb.net/Apple-Shop?retryWrites=true&w=majority')
    return client;
}