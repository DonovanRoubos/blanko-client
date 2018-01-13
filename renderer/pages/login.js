import React from 'react'
import Link from 'next/link'
import router from 'next/router'
import http from '../utils/http'
import config from '../utils/config'

class Login extends React.Component {
	constructor(props) {
		super()

		this.state = {
			username: '',
			password: ''
		}

		this.onType = this.onType.bind(this)
		this.login = this.login.bind(this)
	}

	async login() {
		try {
			const loginResolve = await http.post(`${config.apiUrl}/account/login`, this.state)
			localStorage.setItem('USER', loginResolve.data.user) // eslint-disable-line no-undef
			localStorage.setItem('USER_TOK', loginResolve.data.token) // eslint-disable-line no-undef
			router.push('/start')
		} catch(err) { return err }
	}

	onType(e) { this.setState({ [e.target.name]: e.target.value }) }

	render() {
		return (<div>LOGIN
			<input type="text" onChange={this.onType} name="username"/>
			<input type="password" onChange={this.onType} name="password"/>
			<button onClick={this.login}>LOGIN DAN</button>
		</div>)
	}
}

export default Login
