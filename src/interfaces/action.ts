import {
	ADD_PRODUCT,
	DELETE_PRODUCT,
	PRODUCT_FILTRATION,
} from '../redux/actions';

export type action =
	| {
			type: typeof ADD_PRODUCT;
			payload: { name: string; price: number; id?: string | null };
	  }
	| { type: typeof DELETE_PRODUCT; payload: string }
	| { type: typeof PRODUCT_FILTRATION; payload: string | null };
