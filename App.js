import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
function Comic() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [comicTitle, setComicTitle] = useState(null);
  const [comicImg, setComicImg] = useState(null);
  const [comicUrl, setComicUrl] = useState(null);
  const [comicAlt, setComicAlt] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/xkcd")
      .then(res => res.json())
      .then(
        (result) => {
          setComicAlt(result.alt);
          setComicImg(result.img);
          setComicTitle(result.safe_title);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (<div><h1>{comicTitle}</h1><img src={comicImg} title={comicAlt} alt={comicAlt}/></div>
    );
  }
}

function Activity() {

}
function App() {
  return (
    <div className="App">
        <Comic />
        <Activity />
    </div>
  );
}

export default App;
