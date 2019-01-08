import React from 'react';
import WaitPageBg from '../pages/bg/WaitPageBg.js';



class ApiData extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      loading : true,
      api: '',
      url: this.props.dataLink
    };
  }
  componentWillMount(){
    fetch(this.state.url)
      .then(response => {
        if (!response.ok) { throw response }
        return response.json()
      })
    .then(api => {
      this.setState({ 
        api: api,
        loading: false
      });

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
        {React.cloneElement(this.props.children, { api: this.state.api })}
      </div>
	  );
	}
}

export default ApiData;