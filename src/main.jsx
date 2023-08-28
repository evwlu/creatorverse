import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ViewCreator from './routes/ViewCreator.jsx';
import AddCreator from './routes/AddCreator.jsx';
import EditCreator from './routes/EditCreator.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/add" element={<AddCreator/>}/>
      <Route path="/edit/:id" element={<EditCreator/>}/>
      <Route path="/view/:id" element={<ViewCreator/>}/>
    </Routes>
  </BrowserRouter>
)
