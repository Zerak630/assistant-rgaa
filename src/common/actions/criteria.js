/**
 *
 */
export const TOGGLE_CRITERION = 'common/criteria/TOGGLE_CRITERION';
export const CLOSE_CRITERION = 'common/criteria/CLOSE_CRITERION';
export const OPEN_CRITERION = 'common/criteria/OPEN_CRITERION';

/**
 *
 */
export const closeCriterion = (id) => ({
	type: CLOSE_CRITERION,
	payload: id
});

/**
 *
 */
export const openCriterion = (id) => ({
	type: OPEN_CRITERION,
	payload: id
});

/**
 *
 */
export const toggleCriterion = (id) => ({
	type: TOGGLE_CRITERION,
	payload: id
});
