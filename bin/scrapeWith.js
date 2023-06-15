const utils = require('./utils');



/**
 *
 */
const scrapeWith = (scraper) => (options) =>
	utils.fetchFrom(options.source)
		.then(scraper)
		.then(utils.writeJsonTo(
			options.dest,
			options.merge
		))
		.catch(utils.logError);


/**
 *
 */
module.exports = scrapeWith;
