// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { Thing } from '../src';

// describe('it', () => {
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Thing />, div);
//     ReactDOM.unmountComponentAtNode(div);
//   });
// });


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { QTProvider } from '../src';

const Pages = () => {
  return (
    <QTProvider>
      <h1>hi</h1>
    </QTProvider>
  )
}

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Pages />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
