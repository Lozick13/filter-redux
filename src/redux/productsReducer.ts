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
			const { name, price, id } = action.payload;

			if (name === '' || price === null || price < 1) return state;

			const existingProductIndex = state.productsValue.findIndex(
				p => p.id === id
			);

			if (existingProductIndex !== -1) {
				const updatedProducts = [...state.productsValue];

				updatedProducts[existingProductIndex] = {
					...updatedProducts[existingProductIndex],
					name: name,
					price: price,
				};

				return {
					...state,
					productsValue: updatedProducts,
				};
			}

			return {
				...state,
				productsValue: [
					...state.productsValue,
					{
						id: '' + String(Date.now()),
						name: name,
						price: price,
					},
				],
			};
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
