import React from 'react';
import Layout from './components/layout'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div>
    <Layout></Layout>
    </div>
    </BrowserRouter>
  );
}

export default App;
