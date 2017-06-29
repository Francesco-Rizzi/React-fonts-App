export default function( state = 1, action ){
	
	switch ( action.type ) {
		case 'SELECT':
			return action.payload
		
	}
	
	return state;
	
}