import "./App.css";
import { useState, useEffect } from "react";
import { userName } from "./firebase.js";

function MainPage(props) {
  const { movieInfo, movie, imgUrl, user } = props;

  return (
    <div className="App">
      <h2>Hello, {userName}</h2>
      <h2>{movie}</h2>
      <img src={imgUrl} alt="Scream Poster" />
      <div className="movie">
        <h3>Metascore: {movieInfo.Metascore}</h3>
        <p>Director: {movieInfo.Director}</p>
        <p>Actors: {movieInfo.Actors}</p>
        <p>Rated: {movieInfo.Rated}</p>
        <p className="synopsis">Synopsis: {<i>{movieInfo.Plot}</i>}</p>
      </div>
    </div>
  );
}

export default MainPage;

/*
      <h2>{movie}</h2>
      <img src={imgUrl} alt="Scream Poster" />
*/
