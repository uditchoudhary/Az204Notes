import React, { useState } from 'react';
import Card from './components/Card';
import Menu from './components/Menu';
import topics from './topicsData';
import './App.css';

const App: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="app">
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuVisible ? 'Hide Menu' : 'Show Menu'}
      </button>
      {menuVisible && <Menu topics={topics} />}
      {topics.map((topic, index) => (
        <Card key={index} id={topic.title.replace(/\s+/g, '-')} title={topic.title} description={topic.description} />
      ))}

    </div>
  );
};

export default App;
