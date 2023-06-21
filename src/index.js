import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


// ReactDOM.render(
//   <DndProvider backend={HTML5Backend}>
//     <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
//   </DndProvider>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DndProvider backend={HTML5Backend}>
    <React.StrictMode>
         <App />
       </React.StrictMode>
      </DndProvider>
);

