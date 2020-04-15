import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';

class Dashboard extends Component {
	render() {
		return (
			<div>
				<div className='dashboard container'>
					<div className='row'>
						<div className='col s12 m6'>
							<ProjectList projects={this.props.projects}></ProjectList>
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
const mapStateToProps = (state, ownProps) => {
	console.log(ownProps, state);
	return {
		projects: state.project.projects
	};
};

const mapDispatchToProps = () => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
