import React, {Component} from 'react';
import {connect} from 'react-redux';
import {exitDetailView, getFontClassName} from './misc';

class Detail extends Component {
	
	render(){
		
		let {selected} = this.props;
		
		if ( selected ) {
			
			return (
				<div className="item-detail">
					
					<div className="item-detail-close" onClick={exitDetailView}>&times;</div>
					
					<div className="item-detail-image" style={{backgroundImage : `url(${selected.image_url})`}}></div>
					
					<div className="item-detail-box-left-top">
						THE<br />
						TYPE<br />
						STORY
					</div>
					
					<div className="item-detail-box-left-bottom">
						{selected.name} - {selected.author}
					</div>
					
					<div className="item-detail-box-center-wrap">
						<div className={"item-detail-title" + getFontClassName(selected)}>{selected.name}</div>
						<div className="item-detail-description">{selected.description}</div>
					</div>
				</div>
			);
			
		}
		
		return <div></div>;
		
	}
	
}

export default connect(( {selected} ) =>{
	return {
		selected
	}
})(Detail);