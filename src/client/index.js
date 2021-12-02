import React from 'react';
import { render } from 'react-dom';
import App from '../client/components/App.jsx';
import ViewCars from '../client/components/ViewCars.jsx';
import { BrowserRouter,Routes, Route } from "react-router-dom";

render(
  <BrowserRouter>
<Routes>
  <Route path = "/" element={ <App />}></Route>
  <Route path = "/view" element={ <ViewCars />}></Route>
</Routes>

 </BrowserRouter>,
  document.getElementById('root')
);