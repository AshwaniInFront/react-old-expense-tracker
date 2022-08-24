import React, { useContext,	useEffect} from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = (props) => {

	const { total,budget } = useContext(AppContext);
	const { setSpent } = props;

	useEffect(()=> {
		setSpent(total)
	},[budget,total,setSpent])

	return (
		<div className='alert alert-primary p-4 '>
			<span>Spent so far: £{total}</span>
		</div>
	);
};

export default ExpenseTotal;
