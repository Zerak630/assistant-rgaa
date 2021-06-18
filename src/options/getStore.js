import createStore from '../common/createStore';
import reducer from '../common/reducers';
import getInitialState from '../common/store/getInitialState';

/**
 *
 */
export default () =>
	getInitialState().then((state) =>
		createStore('options', reducer, undefined, state)
	);
