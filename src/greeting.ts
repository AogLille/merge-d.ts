import { capitalize } from './utils'

export function greeting(name: string): string {
	const capitalized = capitalize(name)
	return `Hello, ${capitalized}!`
}
