import React, {Component} from 'react'

import InputPassword from './atoms/form/InputPassword'

class AddTask extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
			subTitle: '',
			labels: ['code'],
			status: 'todo',
			billable: false,
		}

		this.returnTypedValue = this.returnTypedValue.bind(this)
		this.addTask = this.addTask.bind(this)
	}

	returnTypedValue(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	addTask() {
		this.props.add('tasks/add', this.state)
	}

	render() {
		return (
			<div className="addTask">
				<input type="text" name="title" onChange={this.returnTypedValue}/>
				<input type="text" name="subTitle" onChange={this.returnTypedValue}/>
				<button onClick={this.addTask}>Add taskerino</button>
			</div>
		)
	}
}

export default AddTask


/*

	title: 'task 1',
	subTitle: 'task 1 is beetje zo dat dit af moet.',
	labels: ['code'],
	status: 'todo',
	billable: false,

*/
