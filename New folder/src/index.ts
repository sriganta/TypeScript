import "reflect-metadata";

var express = require("express");
var { graphqlHTTP } = require("express-graphql");
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import { PostResolver } from "./post/post-resolver";
import { CommentsResolver } from "./comments/comments.resolver";

// var schema = await buildSchema({
//   resolvers: [PostResolver],
//   validate: false,
// });
// https://zetcode.com/javascript/jsonserver/
// var root = { hello: () => 'Hello world!' };

var app = express();
const PORT: number = Number(process.env.PORT) || 4000;

const main = async () => {
  const apollo = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostResolver, CommentsResolver],
      validate: false, 
    }),
  });
  await apollo.start();
  await apollo.applyMiddleware({ app, path: '/graphql' });

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
};

main().catch((e) => {
  console.error(e);
});
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));
// app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
