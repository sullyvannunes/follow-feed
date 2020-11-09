import React, { ChangeEvent, SyntheticEvent } from "react";

import { createSession } from "../utils/Session";

import "../styles/SignIn.css";

interface State {
  email: string,
  password: string
}

interface InputProps {
  type: string,
  name: string,
  value: string,
  onChange(event: React.ChangeEvent<HTMLInputElement>): void
}

class SignIn extends React.Component {
  state: State

	constructor(props: any) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			email: '',
			password: ''
		}
	}

	handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const value = event.currentTarget.value;
		const name  = event.target.name;

		this.setState({
			[name]: value
		});
	}

	handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    createSession()
      .then((user) => console.log(user));
	}

	render() {
		return(
			<div className="SignIn">
				<form className="Form" onSubmit={this.handleSubmit}>
					<label>Email: </label>
					<Input
						type="email"
						name="email"
						value={this.state.email}
						onChange={this.handleChange} />

					<label>Password: </label>
					<Input
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange} />

					<input type="submit" className="Submit" value="Log In"/>
				</form>
			</div>
		);
	}
}

function Input(props: InputProps) {
	return(
		<input
			type={props.type}
			name={props.name}
			value={props.value}
			onChange={props.onChange} />
	);
}

export default SignIn;
