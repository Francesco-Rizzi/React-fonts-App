export function fetchData(){
	
	let mock = {};
	
	[ 'Avenir', 'Bodoni', 'Caslon', 'Dest', 'Effol' ].map(( item, i ) =>{
		
		mock[ i ] = {
			
			name        : item,
			label       : 'Aa',
			description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur ea impedit molestiae quia quisquam sed unde! Ad adipisci autem culpa, delectus eveniet fuga ipsa maiores nihil nobis vitae voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aut debitis eos est fugit illum inventore magnam molestiae nesciunt nisi nostrum officia, provident quibusdam reiciendis saepe sit sunt voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur ea impedit molestiae quia quisquam sed unde! Ad adipisci autem culpa, delectus eveniet fuga ipsa maiores nihil nobis vitae voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aut debitis eos est fugit illum inventore magnam molestiae nesciunt nisi nostrum officia, provident quibusdam reiciendis saepe sit sunt voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur ea impedit molestiae quia quisquam sed unde! Ad adipisci autem culpa, delectus eveniet fuga ipsa maiores nihil nobis vitae voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aut debitis eos est fugit illum inventore magnam molestiae nesciunt nisi nostrum officia, provident quibusdam reiciendis saepe sit sunt voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur ea impedit molestiae quia quisquam sed unde! Ad adipisci autem culpa, delectus eveniet fuga ipsa maiores nihil nobis vitae voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aut debitis eos est fugit illum inventore magnam molestiae nesciunt nisi nostrum officia, provident quibusdam reiciendis saepe sit sunt voluptatum.',
			id          : i,
			image_url   : 'src/images/' + item.toLowerCase() + '_img.jpg'
		
	}
		
	});
	
	return {
		
		type    : 'FETCH_DATA',
		payload : mock
		
	}
	
}

export function select( item ){
	
	return {
		
		type    : 'SELECT',
		payload : item
		
	}
	
}