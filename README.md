## Usage
```typescript
import { ApolloServerPluginError } from 'apollo-server-plugin-error';

...
const server = new ApolloServer({
  ...,
  plugins: [
    new ApolloServerPluginError((error) => {
      // here you handle the error as you want
      console.error(error);
    })
  ],
});
```

## Install
```shell script
# via npm
npm install apollo-server-plugin-error
# or via yarn
yarn add apollo-server-plugin-error
```