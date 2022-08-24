import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const RemainingBudget = ( props ) => {
	const { budget, remaining,alertType } = useContext(AppContext);
	const { setBudgetLeft } = props;

	useEffect(()=> {
		setBudgetLeft(remaining)
	},[budget,remaining,setBudgetLeft])

	console.log(remaining)

	return (
		<div className={alertType}>
			<span>Remaining: £{remaining}</span>
		</div>
	);
};

export default RemainingBudget;
