import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList'

function App() {
  return (
    <section>
        <Navbar />
        <TourList />
    </section>
  );
}

export default App;
