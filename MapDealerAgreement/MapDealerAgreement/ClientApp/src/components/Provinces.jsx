import React, { Component } from 'react';

export class Provinces extends Component {

	displayName = Provinces.name
	constructor(props) {
		super(props);
		this.state = {			
			value: 'select'
		};
	}
	
	renderProvinces = provinces => {
		return (provinces.map(province =>
			<option key={province} value={province} > {province} </option>
		)
		);
	};

	onProvinceChange = event => {
		const selectedProvince = event.target.value;
		let newState = this.state;
		newState.value = selectedProvince;
		this.setState({ state: newState });	
		if (selectedProvince !== 'Select') {
			this.props.onSelectProvinceForDealer(event);
		}

	};

	render() {
		const provinces = ['AB', 'BC', 'MB', 'NB', 'NL', 'NT', 'NS', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT'];
		return (
			<div className='col-md-3'>
				<label className='form-label'>Province</label>
				<select name='provinceName' className='form-control' onChange={this.onProvinceChange} value={this.state.value}>
					<option>Select</option>
					{this.renderProvinces(provinces)}
				</select>
			</div>
		);
	}
}

