// @flow
import React from 'react';
import matchSorter from 'match-sorter';
import data from '../../data';
import ResultsList from '../../components/ResultsList';

type Props = { searchValue: string };
(matchSorter: (
  Array<typeof data>,
  string,
  ?{ keys: Array<string> }
) => Array<typeof data>);

const ResultsContainer = ({ searchValue }: Props) => (
  <ResultsList
    results={matchSorter(data, searchValue, {
      keys: ['name', 'keywords', 'url'],
    })}
  />
);

export default ResultsContainer;
