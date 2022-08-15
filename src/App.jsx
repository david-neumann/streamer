import Header from './components/Header';
import Home from './pages/Home';
import ShowDetail from './pages/ShowDetail';
import SearchResults from './pages/SearchResults';
import { SavedShowsContextProvider } from './savedShowsContext';

const App = () => {
  return (
    <div className='App'>
      <SavedShowsContextProvider>
        <ShowDetail />
      </SavedShowsContextProvider>
    </div>
  );
};

export default App;
