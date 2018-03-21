import React, {Component} from 'react'
import styles from './actionBarStyle'

class ActionBar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			menuVisibility: false
		}

		this.toggleMenuVisibility = this.toggleMenuVisibility.bind(this)
	}

	toggleMenuVisibility() {
		console.log('CKICK!')
		this.setState(prevState => ({ menuVisibility: !prevState.menuVisibility }))
	}

	render() {

		const { project, setProjectFavorite, iconVisibility } = this.props

		const { menuVisibility } = this.state

		return (
			<div className='action-bar' onClick={() => this.toggleMenuVisibility()}>
				{ iconVisibility &&
					<span className="action-bar-icon"></span>
				}
				{
					menuVisibility &&
					<div className="action-bar-menu">
						<ul>
							<li>Set favorite</li>
							<li>Delete project</li>
						</ul>
					</div>
				}
				<style jsx>{ styles }</style>
			</div>
		)
	}
}

export default ActionBar
