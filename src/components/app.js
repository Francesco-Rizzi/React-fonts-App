import React, {Component} from 'react';
import Slider from '../components/slider'
import SliderIndicator from '../components/slider_indicator'
import Detail from '../components/detail'

export default class App extends Component {
	render(){
		return (
			<div>
				<Slider/>
				<SliderIndicator/>
				<Detail/>
			</div>
		);
	}
	
}


