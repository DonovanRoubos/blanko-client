export default `
	.action-bar {
		position: absolute;
		right: 0;
		font-size: 12px;
		color: black;
		top: 0;
	}

	.action-bar-icon {
		right: 0;
		position: absolute;
	}

	.action-bar-icon:before {
		content: url('../../static/kebab-menu.svg');
		position: relative;
		display: block;
		width: 12px;
		height: 4px;
	}

	.action-bar-menu {
		background: #FFFFFF;
		box-shadow: 0 5px 20px 0 rgba(238,238,243, 0.8);
		border-radius: 4px;
		padding: 12px;
		z-index: 1;
		top: 16px;
		right: -50px;
		position: relative;
	}

	.action-bar-menu ul {
		margin: 0;
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
	}

	.action-bar-menu ul li {
		list-style-type: none;
		margin: 4px 0;
		text-transform: uppercase;
		font-size: 10px;
		font-weight: 500;
	}
`
