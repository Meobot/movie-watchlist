import React from 'react';

const SearchField = (props) => {
	return (
		<div className='Search--container'>
            <img src="./magnifier.png" alt="" className='Search--mag'/>
			<input
				className='Search--field'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Search for a movie'
			></input>
            <button className='Search--btn'>Search</button>
		</div>
	);
};

export default SearchField;