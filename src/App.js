import './App.css';
import requests from './utils/api';
import Banner from './utils/banner';
import Nav from './utils/navbar';
import Row from './utils/row';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title='Netflix Originals' isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Trending' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
