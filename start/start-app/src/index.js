import React from 'react';
import ReactDOM from 'react-dom/client'; // 'react-dom/client'에서 import

// 컴포넌트 import
import App from './App';

// Root를 가져와서 createRoot 호출
const root = ReactDOM.createRoot(document.getElementById('root'));

// Root에서 App 컴포넌트 렌더링
root.render(<App />);