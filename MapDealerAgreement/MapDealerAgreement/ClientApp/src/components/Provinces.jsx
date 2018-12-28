import React, { Component } from 'react';

export class Provinces extends Component {

	displayName = Provinces.name

	renderProvinces = (provinces, selectedProvinces) => {
		return provinces.map(province =>
			<option key={province} value={province} className={selectedProvinces.filter(p => p === province).length > 0 ? 'label-primary' : ''} > {province} </option >
		);
	};



	render() {
		const provinces = ['AB', 'BC', 'MB', 'NB', 'NL', 'NT', 'NS', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT'];
		let value = 'select';
		return (
			<React.Fragment>
				<div className='col-md-3'>
					<label className='form-label'>Province</label>
					<select name='provinceName' className='form-control' onChange={this.props.onSelectProvinceForDealer} value={value}>
						<option>Select / Unselect</option>
						{this.renderProvinces(provinces, this.props.selectedProvinces)}
					</select>
				</div>
				<div className='col-md-3'>
					<label className='form-label'>Selected Provinces</label>
					<label name='SelectProvinces' className='form-control'>{this.props.selectedProvinces.join(",")}</label>
				</div>
			</React.Fragment>
		);
	}
}

