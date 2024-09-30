// import React from 'react';
// import ReactDOM from 'react-dom/client'; // React 18에서 사용하는 hydrateRoot
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// // 서버에서 전달된 초기 데이터를 클라이언트에서 사용
// const initialData = window.__INITIAL_DATA__;

// const rootElement = document.getElementById('root');
// ReactDOM.hydrateRoot(
//   rootElement,
//   <App initialData={initialData} /> // 서버에서 받은 initialData를 App 컴포넌트에 전달
// );

// // 성능 측정
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.hydrate(
  <App />,
  document.getElementById('root')
);
