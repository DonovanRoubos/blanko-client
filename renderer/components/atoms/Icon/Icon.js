import React, { Component, PropTypes } from 'react';
import {icons} from './icons';

// Style import
import styles from './iconStyle'

class Icon extends Component {
	constructor(props){
		super(props)
	}

	render(){

		return (
			<span className="icon">
				<svg
					width={`${this.props.size || this.props.width}px`}
					height={`${this.props.size || this.props.height}px`}
					viewBox="0 0 10 10"
				>
					<g fill={this.props.color}>
						<path d={icons[this.props.iconName]}/>
					</g>
				</svg>
				<style jsx>{ styles }</style>
			</span>
		)
	}
}

Icon.propTypes = {
	iconName: PropTypes.string.isRequired,
	width: PropTypes.string,
	height: PropTypes.string,
	size: PropTypes.string
};

Icon.defaultProps = {
	width: '12',
	height: '12'
}

export default Icon
