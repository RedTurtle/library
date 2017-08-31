// @flow
import React, { Component } from 'react';
import App from '../../components/App';

type Props = {};
type State = { searchValue: string };

export default class AppContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  updateSearchValue = (event: SyntheticEvent<HTMLInputElement>): void => {
    (event.currentTarget: HTMLInputElement);
    const value = event.currentTarget.value;
    this.setState(() => ({
      searchValue: value,
    }));
  };

  render() {
    return <App {...this.state} updateSearchValue={this.updateSearchValue} />;
  }
}
