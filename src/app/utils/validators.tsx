export const ValidateNumberWithEmpty = (input: string) => {
	return !!(
		!input ||
		(input[input.length - 1].match("[0-9]") &&
			input[0].match("[1-9]") &&
			Number(input))
	);
};

export const ValidateNumber = (input: string) => {
	return !!(
		!input ||
		(input[input.length - 1].match("[0-9]") &&
			input[0].match("[1-9]") &&
			Number(input))
	);
};

export const validateEmail = (input: string) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(input);
};

export const validatePrice = (input: string) => {
	return !!(
		!input ||
		(input[input.length - 1].match("[0-9.]") &&
			input[0].match("[1-9.]") &&
			input.match("^[0-9][0-9]*[.]?[0-9]{0,2}$") &&
			Number(input))
	);
};

export const validatePercentage = (input: string) => {
	return !!(
		!input ||
		(input[input.length - 1].match("[0-9]") &&
			input[0].match("[1-9]") &&
			input.match("^[0-9][0-9]*[0-9]{0,2}$") &&
			Number(input))
	);
};

export const validURL = (str: string) => {
	const pattern = new RegExp(
		"^(https?:\\/\\/)?" + // protocol
			"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
			"((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
			"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
			"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
			"(\\#[-a-z\\d_]*)?$",
		"i"
	); // fragment locator
	return !!pattern.test(str);
};
