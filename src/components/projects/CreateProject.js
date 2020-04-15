import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAProject } from '../../store/actions/projectActions';

class CreateProject extends Component {
	state = {
		title: '',
		content: ''
	};
	handleChage = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.createAProject(this.state);
	};
	render() {
		return (
			<div className='container'>
				<form onSubmit={this.handleSubmit} className='white'>
					<h5 className='grey-text text-darken-3'>Create new project</h5>
					<div className='input-field'>
						<label htmlFor='title'>Title</label>
						<input type='text' id='title' onChange={this.handleChage} />
					</div>
					<div className='input-field'>
						<label htmlFor='content'>Project content</label>
						<textarea
							name=''
							id='content'
							cols='30'
							rows='10'
							className='materialize-textarea'
							onChange={this.handleChage}
						></textarea>
					</div>
					<div className='input-field'>
						<button className='btn pink lighten-1 z-deth-0'>Create</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		createAProject: project => dispatch(createAProject(project))
	};
};

export default connect(null, mapDispatchToProps)(CreateProject);
