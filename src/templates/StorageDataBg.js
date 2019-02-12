import React from 'react';
import WaitPageBg from '../pages/bg/WaitPageBg.js';

class StorageData extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      loading : true,
      ApiBg: [],
      url: this.props.dataLink,
    };
  }
  componentWillMount(){
    sessionStorage.getItem('ApiBg') && this.setState({
      ApiBg: JSON.parse(sessionStorage.getItem('ApiBg')),
      loading: false
    })
        
  }
  componentDidMount(){
    if (!sessionStorage.getItem('ApiBg')) {
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
        ApiBg: api,
        loading: false
      });
      sessionStorage.setItem('ApiBg', JSON.stringify(this.state.ApiBg));
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
        {React.cloneElement(this.props.children, { ApiBg: this.state.ApiBg })}
      </div>
	  );
	}
}

export default StorageData;