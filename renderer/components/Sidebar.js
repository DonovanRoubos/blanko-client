import React, { Component } from 'react'
import styles from '../styles/components/sidebar'
class SideBar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: 'sidebar'
		}
	}

	render() {
		return (
			<div className="sidebar">
				<div className="blanko">Blanko</div>
				<div className="favorites">
					favorites
				</div>
				<div className="projects">
					projects
				</div>

				<style jsx>{ styles }</style>
			</div>
		)
	}
}

export default SideBar
