export function stringToTokens(source, markdownIt) {
	let result = [];
	try {
		result = markdownIt(source);
	} catch (err) {
		console.warn(err);
	}

	return result;
}
