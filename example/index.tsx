// import 'react-app-polyfill/ie11';
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { Thing } from '../.';

// const App = () => {
//   return (
//     <div>
//       <Thing />
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));


import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { PUT, QT, QTProvider } from '../.';

const App = () => {

  React.useEffect(() => {
    QT.get({
      url: 'https://example.com/users',
      loadingText: "user geting",
      cb: (res, err) => {
        console.log(res)
      },
    })
  }, [])


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

    })
  }, [])

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

    })
  }, [])

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

    })
  }, [])
  return (
    <QTProvider>
      <h1>users</h1>
    </QTProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
