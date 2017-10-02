import React, {Component} from 'react';
import {connect} from 'react-redux';
import {select} from '../actions';
import _ from 'lodash';
import {createItemClass, onItemClick, getFontClassName} from './misc';

class Slider extends Component {
	
	renderBox( item ){
		
		return (
			<div className='slider-item-box'
				 onClick={onItemClick.bind(this, item, this.props.selected.id)}>
				
				<div className={"slider-item-box-label" + getFontClassName(item)}>{item.label}</div>
				<div className={"slider-item-box-name " + getFontClassName(item)}>{item.name}</div>
			
			</div>
		);
		
	}
	
	render(){
		return (
			<div className="slider">
				<div className="slider-item mod-first">
					<div className="slider-item-box">
						THE<br />
						TYPE<br />
						STORY
					</div>
				</div>
				{_.map(this.props.fonts, ( item, i ) => <div
					key={item.id}
					className={createItemClass(item.id, this.props.selected.id, 'slider-item') + ' has-id-' + item.id}
				>{this.renderBox(item)}</div>)}
			</div>
		);
	}
	
	componentWillMount(){
		
		this.props.select(this.props.fonts[ 0 ]);
		
	}
	
}

export default connect(( {fonts, selected} ) =>{
	return {
		fonts,
		selected
	}
}, {select})(Slider);
