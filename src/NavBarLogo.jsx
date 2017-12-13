import React, { Component } from 'react'

export default class NavBarLogo extends Component {
	constructor(opts) {
		super(opts)
	}

	render() {
		let { width, height, style, opacity } = this.props


		opacity = opacity ? opacity : '0'
		width = width ? width : '100%'
		height = height ? height : '100%'
		style = style ? style : null

		return (
			<svg width={width} height={height} viewBox="0 0 2500 1500" style={style} >
				<path d="M 350 250 L 550 250 L 550 350 L 350 450 L 150 350 L 150 150 L 350 50 L 550 150 "
					fill="transparent"
					strokeLinejoin={"round"}
					stroke="#cc5333"
					strokeWidth="42"
				/>

				<circle cx="550" cy="150" r="42" fill="#cc5333"/>
				<circle cx="550" cy="150" r="22" fill="#320551"/>
				<circle cx="350" cy="250" r="42" fill="#cc5333"/>
				<circle cx="350" cy="250" r="22" fill="#320551"/>
        <text x="600" y="450" fontSize="520px" fill="#fff">GitToken</text>

				{/* <path className={"path"} d="M 300 150 L 200 100 L 100 150 L 100 250 L 200 300 L 300 250 L 300 150 L 200 100 "
					fill="transparent"
					strokeLinejoin={"round"}
					stroke="#cc5333"
					strokeWidth="12"
					// strokeDasharray={"5, 5"}
					// strokeDashoffset={"200"}
				/> */}
			</svg>
		)
	}
}
