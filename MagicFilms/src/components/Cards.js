import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { NavLink } from "react-router-dom";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=a684428f3a81d1239a0f0e37e400f243&language=en-US&page=1"
    ).then(({ data }) => setCards(data.results));
  }, []);

  console.log(cards);

  function getClassByAverage(popular) {
    if (popular >=110.0 ) {
      return "green";
    } else if (popular > 85.600) {
      return "yellow";
    } else {
      return "red";
    }
  }

  return (
    <>
      <div className="cards-container">
        <div className="cards-paragraph">
              <h2>
              MagicFilms Watch Free Movies
              </h2>
        </div>
        <div className="films grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-5">
          {cards.map((el, index) => (
            <div className="cards-film" key={index}>
              <div className="cards-card">
                <div className="cards-img">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
                    alt="kino"
                  />
                </div>
                <div className="cards_cover--darkened"></div>
              </div>

              <div className="cards-info">
              <NavLink to="/card">
                  <p className="cards-title">{el.original_title}</p>
                </NavLink>
                
                <p className={`cards-popularity cards__average--${getClassByAverage(el.popularity)}`}>
                  {el.popularity}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>






      
    </>
  );
};

export default Cards;
