import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
    <Nav />
    <Banner />
    {/*Movies and description*/}
        <Row title="Netflix Orginals" fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow={true}
    />

    <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
    <Row title="Action" fetchUrl={requests.fetchActionMovies} />
    <Row title="Comedy" fetchUrl={requests.fetchComedyMovies } />
    <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />


    </div>
  );
}

export default App;
