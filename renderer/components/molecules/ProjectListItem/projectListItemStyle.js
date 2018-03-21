export default `
	.project-list-item {
		line-height: 1;
		user-select: none;
		cursor: default;
		position: relative;
		font-size: 12px;
		font-weight: 500;
		transition: 100ms linear;
		color: #9B9B9B;
		white-space: pre;
		text-overflow: ellipsis;
	}

	.project-list-item:hover {
		color: #1C87FB;
	}

	.project-list-item.active {
		color: #1C87FB;
	}
	.project-list-item span {
		padding-right: 32px;
	}

	.project-list-item.active:before {
		content: url('../../static/activeProjectLine.svg');
		display: flex;
		position: absolute;
		left: -44px;
		top:0;
		width: 3px;
		height:14px;
		background-color: #7A848F;
	}
`
