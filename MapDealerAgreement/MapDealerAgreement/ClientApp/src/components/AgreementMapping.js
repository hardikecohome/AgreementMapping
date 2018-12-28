import React, { Component } from 'react';

export class AgreementMapping extends Component {

	displayName = AgreementMapping.name
	constructor(props) {
		super(props);
		this.state = {
			provinces: ['AB', 'BC', 'MB', 'NB', 'NL', 'NT', 'NS', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT'],
			value: 'select',
			selectedProvinces: []
		};
		this.selectProvinceForDealer = this.selectProvinceForDealer.bind(this);
		//this.renderProvinces = this.renderProvinces.bind(this.state.provinces);
	}
	
	renderProvinces = provinces => {
		return (provinces.map(province =>
			<option key={province} value={province} > {province} </option>
		)
		);
	};

	selectProvinceForDealer = event => {
		const selectedProvince = event.target.value;
		let newState = this.state;
		if (newState.selectedProvinces.filter(Province => Province === selectedProvince).length > 0) {
			return null;
		}
		newState.value = selectedProvince;
		newState.selectedProvinces.push(selectedProvince);
		console.log(newState.selectedProvinces);
		this.setState({ state: newState });				
	};

	render() {
		return (
			<div className='container'>
				<h1>Agreement Mapping</h1>
				<div className='row'>
					<div className='col-md-3'>
					<label className='form-label'>User Name</label>
						<input type='Text' name='DealerUserName' className='form-control' />
					</div>
					<div className='col-md-3'>
						<label className='form-label'>Province</label>
						<select name='provinceName' className='form-control' onChange={this.selectProvinceForDealer} value={this.state.value}>
							{this.renderProvinces(this.state.provinces)}
						</select>
					</div>
					<div className='col-md-3'>
						<label className='form-label'>Selected Provinces</label>
						<label name='SelectProvinces' className='form-control'>{this.state.selectedProvinces.length}</label>
					</div>					
				</div>


				<div className='row'>
					<div className='col-md-3'>
						<button onClick={this.incrementCounter} className='btn btn-success'>Map Agreement</button>
					</div>
				</div>
			</div>
		);
	}
}

