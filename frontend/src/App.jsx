import React, { useState } from 'react';
import Hero from './components/Hero';
import Modal from './components/Modal';
import Cards from './components/Cards';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="app">
      <main>
        <button className="primaryBtn" onClick={() => setIsOpen(true)}>
          Open Modal
        </button>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
        <Cards />
      </main>
    </div>
  );
}

export default App