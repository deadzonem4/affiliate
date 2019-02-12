import React from 'react';
import WaitPageBg from '../pages/bg/WaitPageBg.js';

class StorageDataEn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading : true,
      ApiEn: [],
      url: this.props.dataLink,
    };
  }
  componentWillMount(){
    sessionStorage.getItem('ApiEn') && this.setState({
      ApiEn: JSON.parse(sessionStorage.getItem('ApiEn')),
      loading: false
    })
        
  }
  componentDidMount(){
    if (!sessionStorage.getItem('ApiEn')) {
      this.fetchData();
    }

  }
  fetchData(){
    fetch(this.state.url)
      .then(response => {
        if (!response.ok) { throw response }
        return response.json()
      })
    .then(api => {
      this.setState({ 
        ApiEn: api,
        loading: false
      });
      sessionStorage.setItem('ApiEn', JSON.stringify(this.state.ApiEn));
    })
    .catch(error => {
      console.log('error');
    });

  }
  render() {
    if (this.state.loading) {
      return (
        <WaitPageBg/>
      );
    }
    return (
      <div>
        {React.cloneElement(this.props.children, { ApiEn: this.state.ApiEn })}
      </div>
    );
  }
}

export default StorageDataEn;