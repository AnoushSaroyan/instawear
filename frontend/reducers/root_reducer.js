import { combineReducers } from "redux";
import errorsReducer from './errors_reducer';
// import ui_reducer from './ui_reducer';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';


const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    // ui: ui_reducer,
});

export default rootReducer;