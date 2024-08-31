import { FC } from 'react';
import classes from './basecheckbox.module.css';

const BaseCheckbox: FC<{
	id: string;
	action: (target: boolean) => void;
	text?: string;
}> = ({ id, action, text }) => {
	return (
		<>
			<div className={classes['base-checkbox']}>
				<input
					id={id}
					onChange={e => action(e.target.checked)}
					className={classes['base-checkbox__input']}
					type='checkbox'
				/>
				<label htmlFor={id} className={classes['base-checkbox__label']}>
					{text}
				</label>
			</div>
		</>
	);
};

export default BaseCheckbox;
