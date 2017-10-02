import data from './fonts_data'

export function fetchData(){
	
	return {
		
		type    : 'FETCH_DATA',
		payload : data,
		
	}
	
}

export function select( item ){
	
	return {
		
		type    : 'SELECT',
		payload : item
		
	}
	
}