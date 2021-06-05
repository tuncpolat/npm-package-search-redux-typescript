import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useTypedSelector'; // mapStateToProps

const RepoList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepo } = useActions();
  const { data, error, loading } = useSelector((state) => state.repos); // useSelector: put all the state in and return only repos

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepo(term); // dispatch action creator
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepoList;
