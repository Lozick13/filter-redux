import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { state } from '../../interfaces/state';
import { setFilter } from '../../redux/products';
import BaseCheckbox from '../../ui/BaseCheckbox/BaseCheckbox';
import BaseInput from '../../ui/BaseInput/BaseInput';
import classes from './filter.module.css';

const Filter = () => {
	const dispatch = useDispatch();
	const { filterValue } = useSelector((state: state) => state.products);
	const [visibleInput, setVisibleInput] = useState<boolean>();

	return (
		<>
			<div className={classes['filter']}>
				<BaseCheckbox
					id='filter-by-name'
					action={(visible: boolean) => {
						setVisibleInput(visible);
						dispatch(setFilter(visible ? '' : null));
					}}
					text='Filtering by name'
				/>
				{visibleInput && (
					<BaseInput
						id='filter'
						name='filter'
						type='text'
						change={e => {
							e.preventDefault();
							dispatch(setFilter(e.target.value));
						}}
						required={false}
						value={filterValue === null ? '' : filterValue}
					/>
				)}
			</div>
		</>
	);
};

export default Filter;
