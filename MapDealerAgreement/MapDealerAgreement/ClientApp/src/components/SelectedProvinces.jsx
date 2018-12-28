import React, { Component } from 'react';

export class SelectedProvinces extends Component {

	displayName = SelectedProvinces.name

	render() {
		return (
			<div className='col-md-3'>
				<label className='form-label'>Selected Provinces</label>
				<label name='SelectProvinces' className='form-control'>{this.props.selectedProvinces.join(",")}</label>
			</div>
		);
	}
}



