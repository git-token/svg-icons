import React, { Component } from 'react'
import MainLogo from './MainLogo.jsx'

export default class MainLogoAndText extends Component {
	constructor(opts) {
		super(opts)
	}

	render() {
		const { width, height, style } = this.props
		return (
			<div style={{ textAlign: 'left', marginBottom: '-50px', marginTop: '-25px' }}>
				<h1>
					<svg width={width} height={height} viewBox="0 0 400 400" style={{ width: '5%', marginBottom: '-25px', marginRight: '-10px' }}>
						<path d="M 200 200 L 300 150 L 300 250 L 200 300 L 100 250 L 100 150 L 200 100 L 255 127 "
							fill="transparent"
							strokeLinejoin={"round"}
							stroke="#cc5333"
							strokeWidth="12"
						/>

						<circle cx="255" cy="127" r="14" fill="#cc5333"/>
						<circle cx="255" cy="127" r="8" fill="#2a1e38"/>
						<circle cx="200" cy="200" r="14" fill="#cc5333"/>
						<circle cx="200" cy="200" r="8" fill="#2a1e38"/>
					</svg>
					GitToken
				</h1>
			</div>
		)
	}
}
