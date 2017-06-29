import {fetchData} from '../actions';

export default function(){
	
	return fetchData().payload;
	
}