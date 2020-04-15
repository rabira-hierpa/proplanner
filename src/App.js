import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SingUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import CreateProject from './components/projects/CreateProject';
import ProjectDetail from './components/projects/ProjectDetail';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Navbar></Navbar>
				<Switch>
					<Route exact path='/' component={Dashboard} />
					<Route path='/project/:id' component={ProjectDetail} />
					<Route path='/signin' component={SignIn} />
					<Route path='/signup' component={SingUp} />
					<Route path='/create' component={CreateProject} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
