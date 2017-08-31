// @flow
import React, { Component } from 'react';
import './styles.css';

type Props = {
  onChange: (SyntheticEvent<HTMLInputElement>) => void,
  value: string,
};

export default class SearchInput extends Component<Props> {
  input: ?HTMLElement;

  defaultProps = {
    onChange: () => {},
    value: '',
  };

  componentDidMount() {
    if (this.input) {
      this.input.focus();
    } else {
      console.warn('SearchInput: Trying to focus a not-yet-mounted input');
    }
  }

  render() {
    return (
      <div className="search-input">
        <input
          type="text"
          ref={el => {
            this.input = el;
          }}
          placeholder="Try typing something..."
          {...this.props}
        />
      </div>
    );
  }
}
