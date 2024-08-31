import { action } from '../interfaces/action';
import { product } from '../interfaces/product';
import { products } from '../interfaces/products';
import {
	ADD_PRODUCT,
	DELETE_PRODUCT,
	SET_FILTER,
	SET_NAME,
	SET_PRICE,
} from './actions';

const initialState: products = {
	nameValue: '',
	priceValue: null,
	filterValue: null,
	productsValue: [],
	filteredProductsValue: [],
};

export const productsReducer = (state = initialState, action: action) => {
	switch (action.type) {
		case SET_NAME: {
			return { ...state, nameValue: action.payload };
		}
		case SET_PRICE: {
			return { ...state, priceValue: action.payload };
		}
		case ADD_PRODUCT: {
			if (
				state.nameValue === '' ||
				state.priceValue === null ||
				state.priceValue < 1
			)
				return state;

			const existingProductIndex = state.productsValue.findIndex(
				p => p.name === state.nameValue
			);

			if (existingProductIndex >= 0) {
				const updatedProducts = [...state.productsValue];

				updatedProducts[existingProductIndex] = {
					...updatedProducts[existingProductIndex],
					price: state.priceValue,
				};

				return {
					...state,
					productsValue: updatedProducts,
					nameValue: '',
					priceValue: null,
				};
			} else {
				return {
					...state,
					productsValue: [
						...state.productsValue,
						{
							id: '' + Date.now(),
							name: state.nameValue,
							price: state.priceValue,
						},
					],
					nameValue: '',
					priceValue: null,
				};
			}
		}
		case DELETE_PRODUCT: {
			return {
				...state,
				productsValue: state.productsValue.filter(p => p.id !== action.payload),
			};
		}
		case SET_FILTER: {
			const filterValue: string | null = action.payload;
			let filteredProductsValue: product[] = [];

			if (filterValue)
				filteredProductsValue = state.productsValue.filter(p =>
					p.name.toLowerCase().includes(filterValue.toLowerCase())
				);

			return {
				...state,
				filterValue: filterValue,
				filteredProductsValue: filteredProductsValue,
			};
		}

		default:
			return state;
	}
};
