import "./App.css";
import { useState, useEffect } from "react";
import MainPage from "./mainPage";

function App() {
  const [imgUrl, setImgUrl] = useState("");
  const [movie, setMovie] = useState("");
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    const getDatabase = async () => {
      let data = await fetch(
        "http://www.omdbapi.com/?apikey=f2822ef&s=Avengers"
      );
      let movies = await data.json().then((movies) => {
        console.log(movies);
        console.log(movies.Search[1]);
        setImgUrl(movies.Search[1].Poster);
        setMovie(movies.Search[1].Title);
      });

      let data2 = await fetch(
        "http://www.omdbapi.com/?apikey=f2822ef&i=tt4154796"
      );
      let movies2 = await data2.json().then((movies) => {
        console.log(movies);
        setMovieInfo(movies);
      });
    };
    getDatabase();
  }, []);
  console.log(movieInfo);

  return (
    <div className="App">
      <h1>Pette Movie Database</h1>
      <MainPage movieInfo={movieInfo} movie={movie} imgUrl={imgUrl} />
    </div>
  );
}

export default App;

//tt4154796;
