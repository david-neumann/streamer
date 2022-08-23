import Home from './pages/Home';
import ShowDetail from './pages/ShowDetail';
import SearchResults from './pages/SearchResults';
import { SavedShowsContextProvider } from './savedShowsContext';
import { Route, Routes } from 'react-router-dom';
import { SearchContextProvider } from './searchContext';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='App'>
      <SavedShowsContextProvider>
        <SearchContextProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/showdetails/:showId' element={<ShowDetail />} />
            <Route path='/search' element={<SearchResults />} />
          </Routes>
        </SearchContextProvider>
      </SavedShowsContextProvider>
      <Footer />
    </div>
  );
};

export default App;
