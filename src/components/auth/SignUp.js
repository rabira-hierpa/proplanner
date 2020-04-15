import React, { Component } from 'react';

export default class SingUp extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	};
	handleChage = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
	};
	render() {
		return (
			<div className='container'>
				<form onSubmit={this.handleSubmit} className='white'>
					<h5 className='grey-text text-darken-3'>Sign Up </h5>

					<div className='input-field'>
						<label htmlFor='firstName' required={true}>
							First Name
						</label>
						<input type='text' id='firstName' onChange={this.handleChage} />
					</div>
					<div className='input-field'>
						<label htmlFor='lastName' required={true}>
							Last Name
						</label>
						<input type='text' id='lastName' onChange={this.handleChage} />
					</div>
					<div className='input-field'>
						<label htmlFor='email' required={true}>
							Email
						</label>
						<input type='email' id='email' onChange={this.handleChage} />
					</div>
					<div className='input-field'>
						<label htmlFor='password'>Password</label>
						<input type='password' id='password' onChange={this.handleChage} />
					</div>
					<div className='input-field'>
						<button className='btn pink lighten-1 z-deth-0'>Login</button>
					</div>
				</form>
			</div>
		);
	}
}
