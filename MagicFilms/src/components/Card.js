import React, { useState, useEffect } from "react";
import axios from "axios";


const Card = () => {
    const [card, setCard] = useState([]);

useEffect(() => {
  axios(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=a684428f3a81d1239a0f0e37e400f243&language=en-US&page=1"
  ).then(({ data }) => setCard(data.results));
}, []);
    console.log(card);
return (
  <>
<div className='card-img group-hover:scale-125 w-auto duration-700 mr-4 h-60 w-auto'>
  {/* Используем map для создания карточек для каждого элемента в массиве cards */}
  {card.map((el, index) => (
      // Используем ключ для уникальной идентификации элементов массива
      <div key={index}>
          {/* Закрываем тег img после указания атрибута src */}
          <img src={`https://image.tmdb.org/t/p/w500/${el.backdrop_path}`} alt="kino" />
          {/* Далее можно добавить остальные элементы, представляющие информацию о карточке */}
          <p className='cards-genre'>
              {el.genre_ids}
          </p>
          <p className='cards-id'>
              {el.id}
          </p>
          <p className='cards-en'>
              {el.original_language}
          </p>
          <p className='cards-overview'>
              {el.overview}
          </p> 
          <p className='cards-data'>
              {el.release_date}
          </p>
          <p className='cards-count'>
              {el.vote_count}
          </p>
          <p className='cards-average'>
              {el.vote_average}
          </p>
      </div>
  ))}
</div>
    </>
  )
}
export default Card