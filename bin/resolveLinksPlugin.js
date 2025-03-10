import {resolve} from 'url';

/**
 *
 */
const resolveLinksPlugin = ($) => {
	/**
	 *	Ugly thing that prepends the given URL to anchor links in
	 *	a string.
	 */
	$.prototype.resolveLinks = function (url) {
		this.find('a').each((i, el) => {
			const link = $(el);
			const href = link.attr('href');
			const resolved = resolve(url, href);

			if (resolved !== url) {
				link.attr('href', resolved);
			}

			link.attr('target', '_blank');

			const title = link.attr('title');
			const text = link.text();
			link.attr(
				'title',
				title
					? `${title} (nouvelle fenêtre)`
					: `${text.replace(/"/g, '&quot;')} (nouvelle fenêtre)`
			);
		});

		return this;
	};
};

export default resolveLinksPlugin;
