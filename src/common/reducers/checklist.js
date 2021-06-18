import {RESET, SET_TEST_DONE} from '../actions/checklist';

/**
 *
 */
const initialState = {};

/**
 *
 */
export default function checklist(state = initialState, {type, payload}) {
	switch (type) {
		case SET_TEST_DONE:
			return {
				...state,
				[payload.id]: payload.done
			};

		case RESET:
			return initialState;

		default:
			return state;
	}
}
