// @flow
import React from 'react';
import './App.css';
import SearchInput from '../SearchInput';
import ResultsContainer from '../../containers/ResultsContainer';

type Props = {
  searchValue: string,
  updateSearchValue: (SyntheticEvent<HTMLInputElement>) => void,
};

const App = ({ searchValue, updateSearchValue }: Props) => (
  <div className="App">
    <div className="App-header">
      <h1>RedTurtle Library</h1>
    </div>
    <SearchInput value={searchValue} onChange={updateSearchValue} />
    <ResultsContainer searchValue={searchValue} />
  </div>
);

export default App;
