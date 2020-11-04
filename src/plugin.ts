import Bugsnag, { Event } from '@bugsnag/js';
import { ApolloServerPlugin } from 'apollo-server-plugin-base';
import { ApolloServerPluginError } from 'apollo-server-plugin-error';

export function getApolloBugsnagPlugin<T>(onError?: (event: Event) => void): ApolloServerPlugin<T> {
  return new ApolloServerPluginError<T>((e, requestContext) => {
    requestContext.errors.forEach(err => {
      Bugsnag.notify(err, event => {
        event.addMetadata('custom', {GraphQL: {
          errorPath: err.path,
        }});
        if (onError) onError(event);
      });
    });
  });
}