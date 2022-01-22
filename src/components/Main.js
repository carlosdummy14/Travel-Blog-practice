import React from 'react';
import Card from './Card';
import data from '../data';

export default function Main() {
  const cards = data.map((card) => {
    return (
      <Card
        key={card.title} 
        {...card}
      />

    );
  }
  )

  return (
    <section className="main">
      {cards}
    </section>
  )
}
