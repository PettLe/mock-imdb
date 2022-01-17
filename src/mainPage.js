import "./App.css";
import { useState, useEffect } from "react";

function MainPage(props) {
  const { movieInfo, movie, imgUrl } = props;

  return (
    <div className="App">
      <h2>{movie}</h2>
      <h3>Metascore: {movieInfo.Metascore}</h3>
      <img src={imgUrl} alt="Scream Poster" />
      <p>Director: {movieInfo.Director}</p>
      <p>Actors: {movieInfo.Actors}</p>
      <p>Rated: {movieInfo.Rated}</p>
      <p className="synopsis">Synopsis: {<i>{movieInfo.Plot}</i>}</p>
    </div>
  );
}

export default MainPage;
