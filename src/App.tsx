import { useSelector } from 'react-redux';
import './App.css';
import ActionForm from './components/ActionForm/ActionForm';
import Filter from './components/Filter/Filter';
import ProductsList from './components/ProductsList/ProductsList';
import { state } from './interfaces/state';

function App() {
	const { filterValue, productsValue, filteredProductsValue } = useSelector(
		(state: state) => state.products
	);

	return (
		<>
			<div style={{ marginBottom: '15px' }}>
				<Filter />
			</div>
			<div>
				<ActionForm />
				{filterValue ? (
					<ProductsList products={filteredProductsValue} />
				) : (
					<ProductsList products={productsValue} />
				)}
			</div>
		</>
	);
}

export default App;
