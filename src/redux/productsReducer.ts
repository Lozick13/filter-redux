import { action } from '../interfaces/action';
import { product } from '../interfaces/product';
import { products } from '../interfaces/products';
import { ADD_PRODUCT, DELETE_PRODUCT, PRODUCT_FILTRATION } from './actions';

const initialState: products = {
	productsValue: [],
	filteredProductsValue: [],
};

export const productsReducer = (state = initialState, action: action) => {
	switch (action.type) {
		case ADD_PRODUCT: {
			if (
				action.payload.name === '' ||
				action.payload.price === null ||
				action.payload.price < 1
			)
				return state;

			const existingProductIndex = state.productsValue.findIndex(
				p => p.name === action.payload.name
			);

			if (existingProductIndex >= 0) {
				const updatedProducts = [...state.productsValue];

				updatedProducts[existingProductIndex] = {
					...updatedProducts[existingProductIndex],
					price: action.payload.price,
				};

				return {
					...state,
					productsValue: updatedProducts,
				};
			} else {
				return {
					...state,
					productsValue: [
						...state.productsValue,
						{
							id: '' + Date.now(),
							name: action.payload.name,
							price: action.payload.price,
						},
					],
				};
			}
		}
		case DELETE_PRODUCT: {
			return {
				...state,
				productsValue: state.productsValue.filter(p => p.id !== action.payload),
			};
		}
		case PRODUCT_FILTRATION: {
			const filterValue: string | null = action.payload;
			let filteredProductsValue: product[] = [];

			if (filterValue)
				filteredProductsValue = state.productsValue.filter(p =>
					p.name.toLowerCase().includes(filterValue.toLowerCase())
				);

			return {
				...state,
				filteredProductsValue: filteredProductsValue,
			};
		}
		default:
			return state;
	}
};
