import React from 'react';
import WaitPageBg from '../pages/bg/WaitPageBg.js';

class StorageSliderBg extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      loading : true,
      SliderBg: [],
      url: this.props.dataLink,
    };
  }
  componentWillMount(){
    sessionStorage.getItem('SliderBg') && this.setState({
      SliderBg: JSON.parse(sessionStorage.getItem('SliderBg')),
      loading: false
    })
        
  }
  componentDidMount(){
    if (!sessionStorage.getItem('SliderBg')) {
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
        SliderBg: api,
        loading: false
      });
      sessionStorage.setItem('SliderBg', JSON.stringify(this.state.SliderBg));
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
        {React.cloneElement(this.props.children, { SliderBg: this.state.SliderBg })}
      </div>
	  );
	}
}

export default StorageSliderBg;