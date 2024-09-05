import { FC, useState } from 'react';
import BaseCheckbox from '../../ui/BaseCheckbox/BaseCheckbox';
import BaseInput from '../../ui/BaseInput/BaseInput';
import classes from './filter.module.css';

const Filter: FC<{
	filter: string | null;
	setFilter: (value: string | null) => void;
}> = ({ filter, setFilter }) => {
	const [visibleInput, setVisibleInput] = useState<boolean>();

	return (
		<>
			<div className={classes['filter']}>
				<BaseCheckbox
					id='filter-by-name'
					action={(visible: boolean) => {
						setVisibleInput(visible);
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

							setFilter(e.target.value === '' ? null : e.target.value);
						}}
						required={false}
						value={filter === null ? '' : filter}
					/>
				)}
			</div>
		</>
	);
};

export default Filter;
