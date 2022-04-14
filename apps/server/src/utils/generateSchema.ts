import { printSchema } from 'graphql/utilities';
import fs from 'fs';
import path from 'path';
import schema from '../modules/schema';

const run = async () =>
  new Promise((resolve, reject) => {
    const graphQLFile = path.join(__dirname, '../../schema.graphql');
    const schemaString = printSchema(schema);
    fs.writeFileSync(graphQLFile, schemaString);
  });

if (module === require.main) {
  run().then(() => process.exit(0));
}