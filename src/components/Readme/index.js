// @flow
import React, { Component } from 'react';

type Props = {
  url: string,
};

type State = { readme: string };

export default class Readme extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      readme: '',
    };
  }

  componentDidMount() {
    const path = new URL(this.props.url).pathname;
    const headers = new Headers();
    headers.append('Accept', 'application/vnd.github.VERSION.html');

    const options = {
      headers: headers
    }
    fetch(`https://api.github.com/repos${path}/readme`, options)
    .then((response) => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.text();
    }).then(readme => {
      this.setState({
        readme: readme
      });
    });
  };

  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.state.readme}} />
    );
  };
}
