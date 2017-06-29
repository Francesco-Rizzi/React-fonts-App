import {combineReducers} from 'redux';
import fonts from './fonts_reducer';
import selected from './selected_font_reducer';

const rootReducer = combineReducers({
										fonts    : fonts,
										selected : selected
									});

export default rootReducer;
