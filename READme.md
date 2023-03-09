**colorify-library-for-console-log-messages**

[Documentation_Pending](pending)

**Installing sdknow1**

With NPM:

```bash
$ npm install colorify-library
```

You can install Node.js easily with [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) or [ASDF](https://blog.natterstefan.me/how-to-use-multiple-node-version-with-asdf).

Sdk-now1 is a software-development-kit for getting a single post by id,getAllPosts, and createPost in jsonplaceholder api with a built-in load balancer.

**Use case ( Colorify using React component )**

**my colorify library for console messages with colors success danger info**

```jsx
import { Log } from "colorfiy-library";

function App() {
  return (
    <>
      {Log.success("Showing my Log.success console Message.")}

      {Log.danger("Showing my Log.danger console Message.")}

      {Log.info("Showing my Log.info console Message.")}
    </>
  );
}
```
