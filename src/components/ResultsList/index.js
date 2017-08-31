// @flow
import React from 'react';
import './styles.css';
import typeof data from '../../data';

type Props = { results: data };

const ResultsList = ({ results }: Props) => (
  <div className="results-list">
    {results.map(item => (
      <div key={item.id} className="result-item">
        <h3>{item.name}</h3>
        <p>
          <a href={item.url}>{item.url}</a>
        </p>
        {item.keywords &&
        item.keywords.length && <p>Keywords: {item.keywords.join(', ')}</p>}
      </div>
    ))}
    {!results.length && <p>No results matched your criteria.</p>}
  </div>
);

export default ResultsList;
