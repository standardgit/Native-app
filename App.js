import React from 'react';
import { View } from 'react-native'
import Profile from './Profile';
import Intro from './Intro';
import Nextpage from './Nextpage'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    }
  }

  setPage = (page) => {
    console.log(page)
    this.setState({ page })
  }

  render() {
    const { page } = this.state;
    return (
    <View style={{flex:1, width: '100%', height: '100%'}}>
    {page == 1 &&
      <Intro setPage={this.setPage} />
    }
    {page == 2 &&
      <Nextpage setPage={this.setPage} />
    }
    {page == 3 &&
      <Profile setPage={this.setPage} />
    }
    </View>
    );
  }
}

