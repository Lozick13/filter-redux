import {
	ADD_PRODUCT,
	DELETE_PRODUCT,
	SET_FILTER,
	SET_NAME,
	SET_PRICE,
} from '../redux/actions';

export type action =
	| { type: typeof SET_NAME; payload: string }
	| { type: typeof SET_PRICE; payload: number | null }
	| { type: typeof ADD_PRODUCT }
	| { type: typeof DELETE_PRODUCT; payload: string }
	| { type: typeof SET_FILTER; payload: string | null };
