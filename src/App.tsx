import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './pages/main/main';
import { DetailInfo } from './pages/detailInfo/detailInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/city/:id' element={<DetailInfo />} />
      </Routes>
    </Router>

  );
}

export default App;
