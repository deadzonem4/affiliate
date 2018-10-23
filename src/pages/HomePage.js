import React from 'react';
import MainLayout from '../layout/MainLayout.js';
import { Link } from 'react-router-dom';



class HomePage extends React.Component {

  render() {
		return (
			<MainLayout>
				<h1>Home Page</h1>
				<Link className="nav-link" to="/affiliate/admin/">Admin</Link>
			</MainLayout>
	  );
  };
    
}

export default HomePage;

