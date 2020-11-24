import React, {
	SyntheticEvent,
	useState,
	useContext
} from "react";

import { useLocation, useHistory } from "react-router-dom";

import { createSession } from "../utils/Session";

import { UserContext } from '../models/User';

import "../styles/SignIn.css";

interface InputProps {
	type: string,
	name: string,
	value: string,
	onChange(event: React.ChangeEvent<HTMLInputElement>): void
}

function SignIn(props: any) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { setUser } = useContext(UserContext);

	const location = useLocation();
	const history = useHistory();

	function handleSubmit(event: SyntheticEvent) {
		event.preventDefault();

    createSession()
			.then((user) => {
				setUser(user);
				const state: any = location.state;
				if(state) {
					history.push(state.referrer.pathname);
				} else {
					history.push('/');
				}
			});
	}

	return(
		<div className="SignIn">
			<form className="Form" onSubmit={handleSubmit}>
				<label>Email: </label>
				<Input
					type="email"
					name="email"
					value={email}
					onChange={(e: any) => { setEmail(e.target.value) }} />

				<label>Password: </label>
				<Input
					type="password"
					name="password"
					value={password}
					onChange={(e: any) => { setPassword(e.target.value) }} />

				<input type="submit" className="Submit" value="Log In"/>
			</form>
		</div>
	);
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
