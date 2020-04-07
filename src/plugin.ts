import { Bugsnag } from '@bugsnag/js';
import { ApolloServerPlugin, GraphQLRequestContext } from 'apollo-server-plugin-base';
import { ApolloServerPluginError } from 'apollo-server-plugin-error';

export function getApolloBugsnagPlugin<T>(bugsnag: Bugsnag.Client,
                                          getNotifyOptions?: (context: GraphQLRequestContext<T>) => Bugsnag.INotifyOpts): ApolloServerPlugin<T> {
  return new ApolloServerPluginError((e, requestContext) => {
    const opts = getNotifyOptions ? getNotifyOptions(requestContext) : ({} as Bugsnag.INotifyOpts);

    requestContext.errors.forEach(err => {
      bugsnag.notify(err, {
        ...opts,
        request: requestContext.request.http,
        metaData: {
          GraphQL: {
            errorPath: err.path,
          },
          ...opts?.metaData,
        },
      });
    });
  });
}