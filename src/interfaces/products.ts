import { product } from './product';

export interface products {
	nameValue: string;
	priceValue: number | null;
	filterValue: string | null;
	productsValue: product[];
	filteredProductsValue: product[];
}
