## Usage
```typescript
import { getApolloBugsnagPlugin } from 'apollo-server-plugin-bugsnag';

...
const server = new ApolloServer({
  ...,
  plugins: [
    getApolloBugsnagPlugin(
      // error callback
      (event, requestContext) => {
        // my context has a `state` object that I can use to enchance
        // notify calls
        return {
          user: requestContext.state.user,
        };
      }
    )
  ],
});
```

## Install
```shell script
# via npm
npm install apollo-server-plugin-bugsnag
# or via yarn
yarn add apollo-server-plugin-bugsnag
```

### If using bugsnag 6.x
```shell script
# via npm
npm install apollo-server-plugin-bugsnag@1.0.0
# or via yarn
yarn add apollo-server-plugin-bugsnag@1.0.0
```