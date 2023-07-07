import {combineReducers} from 'redux';
import panel from './panel';
import helpers from './helpers';
import reference from './reference';
import themes from './themes';
import criteria from './criteria';
import tests from './tests';
import instructions from './instructions';
import checklist from './checklist';
import imports from './imports';
import styles from './styles';

/**
 *	Reducers shared by each instance in the background.
 */
export const sharedReducers = {
	reference,
	instructions,
	helpers
};

/**
 *	Reducers that are instance-specific in the background.
 */
export const appReducers = {
	panel,
	themes,
	criteria,
	tests,
	checklist,
	imports,
	styles
};

export const reducers = {
	...sharedReducers,
	...appReducers
};

export default combineReducers(reducers);
