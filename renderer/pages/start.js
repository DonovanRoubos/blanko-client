import electron from 'electron'
import React, {Component} from 'react'
import router from 'next/router'

// utils
import db from '../utils/db'
import add from '../utils/add'
import put from '../utils/put'
import del from '../utils/delete'
import get from '../utils/get'

// styles
import styles from '../styles/pages/start'

// components
import Loader from '../components/atoms/Loader'
import AddTask from '../components/AddTask'
import Sidebar from '../components/Sidebar'
import Project from '../components/Project'

class Start extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: 'title',
			current: 1,
			kanban: false,
			accountId: '5a37fcea045fa621f062614e',
			tasks: [],
			columns: ['todo', 'doing', 'done'],
			loading: true,
		}

		this.remote = electron.remote || false
		this.addNewTask = this.addNewTask.bind(this)
		this.toggleView = this.toggleView.bind(this)
		this.updateTaskStatus = this.updateTaskStatus.bind(this)
		this.reloadTasks = this.reloadTasks.bind(this)
		this.deleteTask = this.deleteTask.bind(this)
	}

	componentDidMount() {
		const isThereAToken = localStorage.getItem('USER_TOK') // eslint-disable-line no-undef
		if (!isThereAToken) {
			router.push('/login')
		} else {
			this.setState({ loading: false })
		}
		this.dataInit()
	}

	async dataInit() {
		const { data: tasks } = await get('tasks', this.state.accountId)
		console.log('tasks', tasks);
		this.setState({ tasks })

	}

	reloadTasks() {
		db.table('tasks')
			.toArray()
			.then(res => {
				this.setState({
					tasks: res
				})
			})
	}

	async addNewTask(endpoint, objectToAdd, id) {
		id = this.state.accountId
		const mess = await add(endpoint, id, objectToAdd)
	}

	toggleView() {
		console.log('toggle view');
		this.setState(oldState => ({
			kanban: !oldState.kanban
		}))
	}

	updateTaskStatus(e, i, id, task) {
		switch (task.status) {
			case 'todo':
				put('tasks', id, { status: 'done' })
				break;
			case 'doing':
				put('tasks', id, { status: 'done' })
				break;
			case 'done':
				put('tasks', id, { status: 'todo' })
				break;
		}

		// this.reloadTasks()
	}

	deleteTask(e, i, id) {
		// del('tasks', id)
		this.reloadTasks()
	}

	render() {
		return (
			<div className="container">
				<Sidebar
					tasks={this.state.tasks}
				/>

				<AddTask
					add={ this.addNewTask }
				/>

				<Project
					tasks={this.state.tasks}
					kanban={this.state.kanban}
					updateTaskStatus={this.updateTaskStatus}
					deleteTask={this.deleteTask}
				/>

				{ !this.state.loading ? <Loader/> : <Loader loading/> }

				<style jsx global>{ styles }</style>
			</div>
		)
	}
}

export default Start
