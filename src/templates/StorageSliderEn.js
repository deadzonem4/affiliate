import React from 'react';
import WaitPageBg from '../pages/bg/WaitPageBg.js';

class StorageSliderEn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading : true,
      SliderEn: [],
      url: this.props.dataLink,
    };
  }
  componentWillMount(){
    sessionStorage.getItem('SliderEn') && this.setState({
      SliderEn: JSON.parse(sessionStorage.getItem('SliderEn')),
      loading: false
    })
  }
  componentDidMount(){
    if (!sessionStorage.getItem('SliderEn')) {
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
        SliderEn: api,
        loading: false
      });
      sessionStorage.setItem('SliderEn', JSON.stringify(this.state.SliderEn));
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
        {React.cloneElement(this.props.children, { SliderEn: this.state.SliderEn })}
      </div>
    );
  }
}

export default StorageSliderEn;