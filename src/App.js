import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import ProjectDetail from './components/projects/ProjectDetail';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Navbar></Navbar>
				<Switch>
					<Route exact path='/' component={Dashboard} />
					<Route path='/project/:id' component={ProjectDetail} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
