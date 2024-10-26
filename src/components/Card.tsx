import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  description: string;
  id: string;
}

const Card: React.FC<CardProps> = ({ title, description, id }) => {
  return (
    <div className="card" id={id}>
      <h2>{title}</h2>
      <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
        {description.split('\n').map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </div>
  );
};


export default Card;
