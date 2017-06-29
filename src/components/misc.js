import $ from 'jquery';

export function createItemClass( id, selected, baseClass ){
	
	if ( selected === id ) {
		
		baseClass += ' mod-selected';
		
	}
	
	return baseClass;
	
}

//NEED TO BIND
export function onItemClick( item, currentItemId ){
	
	if ( item.id !== currentItemId ) {
		
		//change slide
		changeSlide(item.id);
		this.props.select(item);
		
	} else {
		
		//detail page
		enterDetailView();
		
	}
	
}

function enterDetailView(  ){
	
	$('body').addClass('mod-detail');

}

export function exitDetailView(  ){
	
	$('body').removeClass('mod-detail');
	
}

function changeSlide( newId ){
	
	const currentIndex = getItemIndexFromItem(getSelected());
	const nextIndex    = getItemIndexFromItem(getItemFromId(newId));
	
	animateSlider(currentIndex, nextIndex);
	
}

function getItemFromId( id ){
	
	const slider = getSlider();
	return slider.querySelector('.has-id-' + id);
	
}

function getSlider(){
	
	return document.querySelector('.slider');
	
}

function getSelected(){
	
	const slider = getSlider();
	return slider.querySelector('.mod-selected');
	
}

function getItemIndexFromItem( item ){
	
	return Array.from(getSlider().children).indexOf(item);
	
}

function getWidthToAnimate( diff ){
	
	const windowWidth = window.innerWidth;
	const itemWidth   = windowWidth / 100 * 40;
	
	if ( isLastItem(getSelected()) ) {
		
		if ( diff < 0 ) {
			
			return (itemWidth * (diff + 1)) - windowWidth / 100 * 10;
			
		}
		
		return 0;
		
	}
	
	return itemWidth * diff;
	
}

function isLastItem( item ){
	
	const items = getSlider().children;
	return item === items[ items.length - 1 ];
	
}

function animateSliderChange( amount ){
	
	const slider = getSlider();
	const final  = slider.scrollLeft + amount;
	
	$('body').css({'pointer-events' : 'none'});
	$(slider).stop().animate({scrollLeft : final}, 300, 'swing', function(){
		$('body').css({'pointer-events' : 'auto'});
	});
	
}

function animateSlider( index1, index2 ){
	
	animateSliderChange(getWidthToAnimate(index2 - index1));
	
}
