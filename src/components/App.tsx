import { Provider } from 'react-redux';
import { store } from '../state';
import RepoList from './RepoList';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a package</h1>
        <RepoList />
      </div>
    </Provider>
  );
}

export default App;
