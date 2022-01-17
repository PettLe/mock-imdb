import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const getDatabase = async () => {
      let data = await fetch("http://www.omdbapi.com/?apikey=f2822ef&t=Scream");
      let movies = await data.json().then((movies) => {
        console.log(movies);
        console.log(movies.Poster);
        setImgUrl(movies.Poster);
      });
    };
    getDatabase();
  }, []);

  return (
    <div className="App">
      <h1>Pette Movie Database</h1>
      <img src={imgUrl} alt="Scream Poster" />
    </div>
  );
}

export default App;
