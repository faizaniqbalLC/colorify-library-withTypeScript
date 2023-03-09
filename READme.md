**colorify-library-for-console-log-messages**

[Documentation_Pending](pending)

**Installing colorify-library**

With NPM:

```bash
$ npm install colorify-library
```

You can install Node.js easily with [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) or [ASDF](https://blog.natterstefan.me/how-to-use-multiple-node-version-with-asdf).

Colorify libray is a library for showing console log messages colorfully.

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
