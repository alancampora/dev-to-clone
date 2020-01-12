import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';

import  typeDefs  from './type-defs';
import resolvers  from './resolvers';

const startServer = async () => {
	const server = new ApolloServer({ typeDefs, resolvers });

	const path = '/graphql';

	await createConnection();

	const app = express();

	server.applyMiddleware({ app, path });

	app.listen({ port: 4000 }, () =>
		console.log(
			`🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
		),
	);
};

startServer();
