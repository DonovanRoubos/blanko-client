import React from 'react'
import styles from './projectListStyle'
import get from '../../../utils/get'

// Components
import ProjectListItem from '../../molecules/ProjectListItem'

const listStyle = {
	lineHeight: 2.6
}

class ProjectList extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { projects, activeProjectId, selectedProjectId, setProjectFavorite, favorite, selectProject } = this.props

		return(
			<div className={this.props.className}>
				<div className="label">
					{ this.props.className }
					{!favorite && <span className="add-project" onClick={e => this.props.toggleModal('addProjectModalVisible', true)}>
						<img src="/static/plus-large.svg"/>
					</span>}
				</div>

				{projects !== undefined && <div>

					<ul className="projects-list">{
						projects.filter(project => project !== null && project.favorite === favorite).map((project, i) => {

							return(
								<li key={i}>
									<ProjectListItem
										project={project}
										selectProject={selectProject}
										selectedProjectId={selectedProjectId}
									/>
								</li>
							)

						})
					}</ul>

				</div>}

				<style jsx>{styles}</style>
			</div>
		)
	}
}

export default ProjectList;
