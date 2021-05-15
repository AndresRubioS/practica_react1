import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Nuestros productos</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Mira nuestro catálogo de puertas acorazadas'
              label='Puertas acorazadas'
              
            />
            <CardItem
              src='images/img-2.jpg'
              text='Gran variedad de cerraduras reforzadas'
              label='Cerraduras reforzadas'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Las mejores cajas fuertes del mercado'
              label='Mystery'
              
            />
            <CardItem
              src='images/img-4.jpg'
              text='Nuestros sistemas electronicos de seguridad'
              label='Sistemas electronicos'
             
            />
            <CardItem
              src='images/img-8.jpg'
              text='Camaras acorazadas de ultima generacion'
              label='Camaras acorazadas'
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;