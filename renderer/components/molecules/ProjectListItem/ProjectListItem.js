import React, {Component} from 'react'
import styles from './projectListItemStyle'

// Components
import ActionBar from '../../molecules/ActionBar'

class ProjectListItem extends Component {
	constructor(props) {
		super(props)

		this.state = {
			iconVisibility: false
		}

		this.selectProjectCheck = this.selectProjectCheck.bind(this)
	}

	selectProjectCheck(e) {
		if(e.target.classList[0] !== 'action-bar-icon') {
			this.props.selectProject(this.props.project._id)
		}
	}

	render() {

		const { key, project, setProjectFavorite, visible, selectProject, selectedProjectId } = this.props

		const { iconVisibility } = this.state

		return (
			<div
				className={'project-list-item ' + (selectedProjectId === project._id ? 'active' : '') }
				onClick={e => this.selectProjectCheck(e)}
				onMouseEnter={() => this.setState({iconVisibility: true})}
				onMouseLeave={() => this.setState({iconVisibility: false})}
			>
				{project.projectTitle}
				<ActionBar
					project={project}
					setProjectFavorite={setProjectFavorite}
					iconVisibility={iconVisibility}
				/>
				<style jsx>{ styles }</style>
			</div>
		)
	}
}

export default ProjectListItem
