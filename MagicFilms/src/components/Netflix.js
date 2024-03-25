import React from "react";


const Netflix = () => {
  return (
    <>
      <div className="trending-container">
        <h2 className="movie-paragraph">
        Watch free netflix MagicFilms
        </h2>
        <div className="movie grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-8">
        <div class="movie-5">
    <div class="flex justify-center items-baseline flex-wrap">
        <div class="flex m-2">
            <button class="back-button">
                <div class="flex leading-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-5 h-5">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                   
                </div>
            </button>
        </div>
    </div>
</div>
       
          <div className="movie-poster">
            <div className="netflix-img">
              <img
                src=" https://images-s.kinorium.com/movie/poster/1684033/h280_40921968.jpg"
                alt="Мадам Си Джей Уокер: первая женщина-миллионер в США "
              />
            </div>
            <p className="movie-title">
            Self Made: Inspired by Life of Madam CJ Walker
            </p>
          </div>
          <div className="movie-poster">
            <div className="netflix-img">
              <img
                src="https://resizing.flixster.com/2lDrCwrxvzXcFQVa6a6MvLiNX8w=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNDNkOWY2ZjgtYjhmMi00N2NjLTgyNGUtMTc2OTlhOTcwODc0LmpwZw== "
                alt="Bridgerton "
              />{" "}
            </div>
            <p className="movie-title"> Bridgerton</p>
          </div>
          <div className="movie-poster">
            <div className="netflix-img">
              <img
                src=" https://www.toramp.com/posters/shows/4263/width360/aj_and_the_queen.jpg"
                alt="AJ and the Queen "
              />
              {" "}
            </div>
            <p className="movie-title"> AJ and the Queen</p>
          </div>
          <div className="movie-poster">
            <div className="netflix-img">
              <img
                src="https://upload.wikimedia.org/wikipedia/ru/0/0e/GLOW_Netflix.jpg"
                alt=" Вставай и сияй"
              />{" "}
            </div>
            <p className="movie-title"> Glow</p>
          </div>
          <div className="movie-poster">
            <div className="netflix-img">
              <img
                src=" https://i0.wp.com/pelikulamania.com/wp-content/uploads/2024/02/EN-US_ATLA_Main_Ensemble_Vertical_27x40_sRGB_PRE.jpg?ssl=1"
                alt=" Аватар: легенда об Аанге"
              />{" "}
            </div>
            <p className="movie-title"> Avatar: The Legend of Aang</p>
          </div>
          <div className="movie-poster">
            <div className="netflix-img">
              <img
                src=" https://www.kino-teatr.ru/movie/posters/big/2/139022.jpg"
                alt="Засланец из космоса "
              />{" "}
            </div>
            <p className="movie-title">Resident Alien </p>
          </div>
          <div class="movie-5">
    <div class="flex justify-center items-baseline flex-wrap">
        <div class="flex m-2">
            <button class="next-button">
                <div class="flex leading-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-5 h-5 ml-1">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </div>
            </button>
        </div>
    </div>
</div>
          

          
        </div>
      </div>
    </>
  );
};

export default Netflix;
