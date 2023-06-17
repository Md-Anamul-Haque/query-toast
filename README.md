# query-toast React User Guide

```cli
yarn add query-toast
```
```cli
npm i query-toast
```

```tsx
import { PUT, QT, QTProvider } from 'query-toast';

```
```tsx
    <QTProvider>
      <App />
    </QTProvider>
```

```tsx
const user = {
  name:'Anamul Haque',
  // ...
}
  React.useEffect(() => {
    QT.post({ //[get,post,put,delete]
      url: 'https://example.com/users',
      data: user, // or {...user}
      cb: (res, err) => {
        console.log(res)
      }
    })
  }, [])
```


```tsx
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
      },
      config: {
        // Headers: AxiosHeaders,
      }

    })
  }, []);

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
      },
      config: {
        // Headers: AxiosHeaders,
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
      },
      config: {
        // Headers: AxiosHeaders,
      }

    })
  }, [])
```


```tsx
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
      },
      config: {
        // Headers: AxiosHeaders,
      }

    })
  }, []);

  ```