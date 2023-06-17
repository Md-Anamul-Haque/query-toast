# query-toast React User Guide

```cli
yarn add query-toast
```
```cli
npm i query-toast
```

```tsx
import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { PUT, QT, QTProvider } from '../.';
```
```tsx
const App = () => {

  React.useEffect(() => {
    QT.get({
      url: 'https://example.com/users',
      loadingText: "user geting",
      cb: (res, err) => {
        console.log(res)
      },
       condition: {
        data: (res) => {
          if (res.data?.success) {
            return true
          } else {
            return false
          }
        },
      }
      config: {

        Headers: AxiosHeaders,
      }

    })
  }, [])
```
```tsx

  React.useEffect(() => {
    QT.post({
      url: 'https://example.com/users',
      data: {
        // ... your data type any like axios
      },
      loadingText: "user creating",
      cb: (res, err) => {
        console.log(res)
      },
       condition: {
        data: (res) => {
          if (res.data?.success) {
            return true
          } else {
            return false
          }
        },
      }
      config: {

        Headers: AxiosHeaders,
      }

    })
  }, [])
```
```tsx
  React.useEffect(() => {
    PUT({
      url: 'https://example.com/users',
      data: {
        // ... your data type any like axios
      },
      loadingText: "delete process runing",
      cb: (res, err) => {
        console.log(res)
      },
       condition: {
        data: (res) => {
          if (res.data?.success) {
            return true
          } else {
            return false
          }
        },
      }
      config: {

        Headers: AxiosHeaders,
      }

    })
  }, [])
```
```tsx
  React.useEffect(() => {
    QT.delete({
      url: 'https://example.com/users',
      loadingText: "user geting",
      alertMessage: 'are you sure for delete?',
      cb: (res, err) => {
        console.log(res)
      },
       condition: {
        data: (res) => {
          if (res.data?.success) {
            return true
          } else {
            return false
          }
        },
      }
      config: {

        Headers: AxiosHeaders,
      }

    })
  }, [])
  return (
    <QTProvider>
      <App />
    </QTProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

```