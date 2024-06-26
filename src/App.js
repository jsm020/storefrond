import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/products/main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
