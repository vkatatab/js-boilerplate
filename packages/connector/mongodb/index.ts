import { MongoClient, ServerApiVersion } from 'mongodb';

export const mongoDbClient = (uri: string) => new MongoClient(uri, { serverApi: ServerApiVersion.v1 });