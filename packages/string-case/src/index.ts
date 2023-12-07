export function toDashedName(key: string): string {
	const matches: string[] = key.match(/[A-Z]/g) ?? []
	return matches
		.reduce(
			(accumulator, letter) =>
				accumulator.replace(new RegExp(letter, 'g'), `-${letter.toLowerCase()}`),
			key,
		)
		.replace(/(-|_|\s)+/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-+|-+$/g, '')
		.trim()
}

export function toUnderscoredName(key: string): string {
	const matches: string[] = key.match(/[A-Z]/g) || []
	return matches
		.reduce(
			(accumulator, letter) =>
				accumulator.replace(new RegExp(letter, 'g'), `-${letter.toLowerCase()}`),
			key,
		)
		.replace(/(-|_|\s)+/g, '_')
		.replace(/_+/g, '_')
		.replace(/^_+|_+$/g, '')
		.trim()
}

export function toCamelCase(key: string): string {
	const matches: string[] = key.match(/(-|_|\s+)[a-zA-Z0-9]/g) || []
	const name = matches
		.reduce(
			(accumulator, letter) =>
				accumulator.replace(new RegExp(letter, 'g'), letter.replace(/-|_|\s+/g, '').toUpperCase()),
			key.replace(/^[0-9]+/g, ''),
		)
		.replace(/(-|_|\s)+/g, '')
		.replace(/^(-|_)+|(-|_)+$/g, '')
		.trim()
	return `${name.substr(0, 1).toLowerCase()}${name.substr(1)}`
}

export function toClassName(key: string): string {
	return capitalize(toCamelCase(key).replace(/[_-\s]+/g, ''))
}

export function capitalize(key: string): string {
	if (key === undefined) return key
	key = key.trim()
	return key.substring(0, 1).toUpperCase() + key.substr(1)
}

export function capitalizeWords(key: string): string {
	if (key === undefined) return key
	key = key.trim()
	return toDashedName(key).split('-').map(capitalize).join(' ')
}

export function nextName(names: string[], prefix: string) {
	const counter = names.reduce((a, i) => {
		const regExp = new RegExp(prefix + '(\\d+)')
		const output = regExp.exec(i)
		const value = output ? output[1] : null
		const counter = value ? parseInt(value) : 0
		return !isNaN(counter) ? Math.max(counter + 1, a) : a
	}, 1)
	return `${prefix}${counter}`
}
