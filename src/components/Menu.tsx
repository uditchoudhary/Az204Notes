import React from 'react';
import './Menu.css';

interface MenuProps {
  topics: { title: string }[];
}

const Menu: React.FC<MenuProps> = ({ topics }) => {
  return (
    <div className="menu">
      <h3>Jump to Topic</h3>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>
            <a href={`#${topic.title.replace(/\s+/g, '-')}`}>{topic.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
