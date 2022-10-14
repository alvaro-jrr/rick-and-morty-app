/** Section schema */
export interface Section {
	link: string;
	title: string;
}

/**
 * Information schema
 */
export interface Information {
	count: number;
	pages: number;
	next: string | null;
	prev: string | null;
}

/**
 * Character schema
 */
export interface Character {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: { name: string; url: string };
	location: { name: string; url: string };
	image: string;
	episode: string[];
	url: string;
	created: string;
}

/**
 * Schema of request for all entries of a type
 */
export interface All<T> {
	info: Information;
	results: T[];
}
