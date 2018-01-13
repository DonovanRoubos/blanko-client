import React, { PropTypes, Component } from 'react'

import styles from './radioButtonStyle'

class RadioButton extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className={`radio-button ${this.props.checked ? 'checked' : ''}`}>
				<input
					type="radio"
					name={this.props.name}
					onClick={this.props.onClick}
					checked={this.props.checked}
					disabled={this.props.disabled}/>
					Kind of text
				<style jsx>{ styles }</style>
			</div>
		)
	}
}

RadioButton.propTypes = {
	name: PropTypes.string,
	onClick: PropTypes.func,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
}

export default RadioButton
