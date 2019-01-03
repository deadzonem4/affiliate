import React from 'react';
import WaitPageBg from '../../pages/bg/WaitPageBg.js';

const url = 'https://dev.winbet-bg.com/api/bg/news';

class NewsData extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      loading : true,
      api: ''
    };
  }
  componentWillMount(){
    fetch(url)
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

export default NewsData;