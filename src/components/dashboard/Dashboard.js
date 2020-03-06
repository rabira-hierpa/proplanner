import React, { Component } from 'react';
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';

export default class Dashboard extends Component {
	render() {
		return (
			<div>
				<div className='dashboard container'>
					<div className='row'>
						<div className='col s12 m6'>
							<ProjectList></ProjectList>
						</div>
						<div className='col s12 m5 offset-1'>
							<Notifications></Notifications>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
