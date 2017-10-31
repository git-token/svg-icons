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
					<MainLogo style={{ width: '5%', marginBottom: '-25px', marginRight: '-10px' }} />
					GitToken
				</h1>
			</div>
		)
	}
}
