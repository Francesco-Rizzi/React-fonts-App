import React, {Component} from 'react';
import {connect} from 'react-redux';
import {select} from '../actions';
import _ from 'lodash';
import {createItemClass, onItemClick} from './misc';

class SliderIndicator extends Component {
	
	render(){
		return (
			<div className="className slider-indicator-wrap">
				<div className="slider-indicator">
					{_.map(this.props.fonts, ( item, i ) => <a
						href="#"
						key={i}
						className={createItemClass(item.id, this.props.selected.id, 'slider-indicator-item')}
						onClick={onItemClick.bind(this, item)}>
						{item.name[ 0 ]}
					</a>)}
				</div>
				<div className="slider-indicator-progress" style={{transform : `translateX(${this.getTranslateVal()}px)`}}></div>
			</div>
		);
	}
	
	getTranslateVal(){
		
		let indicatorWidth = Math.min(window.innerWidth, 1024);
		let offset         = (window.innerWidth - indicatorWidth) / 2;
		let index          = this.props.selected.id;
		let itemWidth      = indicatorWidth / Object.keys(this.props.fonts).length;
		
		return offset + (index * itemWidth + itemWidth / 2);
		
		
	}
	
	componentDidMount(){
		window.addEventListener('resize', this.handleResize.bind(this));
	}
	
	componentWillUnmount(){
		window.removeEventListener('resize', this.handleResize.bind(this));
	}
	
	handleResize(){
		this.forceUpdate();
	};
	
}

export default connect(( {fonts, selected} ) =>{
	return {
		fonts,
		selected
	}
}, {select})(SliderIndicator);
