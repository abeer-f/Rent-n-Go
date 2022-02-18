import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = React.lazy(() => import("../client/components/App.jsx"));
const ViewCars = React.lazy(() => import("../client/components/ViewCars.jsx"));

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<React.Suspense fallback={<>...</>}>
        <App />
      </React.Suspense>}></Route>
      <Route path="/dashboard" element={<React.Suspense fallback={<>...</>}>
        <ViewCars />
      </React.Suspense>}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);