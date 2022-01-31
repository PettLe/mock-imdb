import "./App.css";
import { useState, useEffect } from "react";
import MainPage from "./mainPage";
import { signIn, userName, googleSignIn, userSignOut } from "./firebase.js";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

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

  const login = function () {
    signIn();
    console.log(userName);
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <h1>Pette Movie Database</h1>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link
              href="#signin"
              onClick={() => {
                login();
              }}
            >
              Sign-In
            </Nav.Link>
            <Nav.Link href="#signout" onClick={userSignOut}>
              Sign-Out
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <MainPage
        movieInfo={movieInfo}
        user={userName}
        movie={movie}
        imgUrl={imgUrl}
      />
    </div>
  );
}

export default App;

//tt4154796;
