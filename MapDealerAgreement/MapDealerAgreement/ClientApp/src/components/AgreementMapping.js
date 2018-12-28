import React, { Component } from 'react';
import { SelectedProvinces } from './SelectedProvinces';
import { Provinces } from './Provinces';

export class AgreementMapping extends Component {

	displayName = AgreementMapping.name
	constructor(props) {
		super(props);
		this.state = {
			selectedProvinces: []
		};
	}
	
	
	selectProvinceForDealer = event => {
		const selectedProvince = event.target.value;
		let newState = this.state;
		if (newState.selectedProvinces.filter(Province => Province === selectedProvince).length > 0) {
			return null;
		}
		newState.selectedProvinces.push(selectedProvince);
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
					<Provinces onSelectProvinceForDealer={this.selectProvinceForDealer} />
					<SelectedProvinces selectedProvinces={this.state.selectedProvinces} />					
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

