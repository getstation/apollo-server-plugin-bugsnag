import { ApolloServerPlugin, GraphQLRequestListener } from 'apollo-server-plugin-base';
import { GraphQLError } from 'graphql';

export class ApolloServerPluginError<T> implements ApolloServerPlugin<T> {
  constructor(
    protected errorHandler: (e: GraphQLError) => any,
  ) {}

  requestDidStart(): GraphQLRequestListener<T> {
    return {
      didEncounterErrors: requestContext => {
        requestContext.errors.forEach(err => {
          this.errorHandler(err);
        });
      },
    };
  }
}
