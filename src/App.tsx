import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ActionForm from './components/ActionForm/ActionForm';
import Filter from './components/Filter/Filter';
import ProductsList from './components/ProductsList/ProductsList';
import { product } from './interfaces/product';
import { state } from './interfaces/state';
import { addProduct, deleteProduct, productFiltration } from './redux/products';

function App() {
	const dispatch = useDispatch();
	const { productsValue, filteredProductsValue } = useSelector(
		(state: state) => state.products
	);
	const [name, setName] = useState<string>('');
	const [price, setPrice] = useState<number | null>(null);
	const [filter, setFilter] = useState<string | null>(null);

	const addData = () => {
		if (price !== null) dispatch(addProduct(name, price));
	};
	const editData = (p: product) => {
		setName(p.name);
		setPrice(p.price);
	};
	const deleteData = (id: string) => {
		dispatch(deleteProduct(id));
	};

	useEffect(() => {
		dispatch(productFiltration(filter));
	}, [filter, productsValue, dispatch]);

	return (
		<>
			<div style={{ marginBottom: '15px' }}>
				<Filter
					filter={filter}
					setFilter={(value: string | null) => setFilter(value)}
				/>
			</div>
			<ActionForm
				data={{ name: name, price: price }}
				setData={{ name: setName, price: setPrice }}
				addData={addData}
			/>
			<ProductsList
				products={filter === null ? productsValue : filteredProductsValue}
				editData={editData}
				deleteData={deleteData}
			/>
		</>
	);
}

export default App;
