import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Grid = styled.div`
	padding: 32px 80px 0 80px;
	@media (max-width: 1120px) {
		padding: 32px 40px 0 40px;
	}
	height: 62vh;
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 8px;

	& .item-0 {
		grid-column: 1 / span 2;
		grid-row: 1 / span 2;
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	& .item-1 {
		grid-column: 3 / span 2;
		grid-row: 1 / span 2;
	}
	& .item-2 {
		grid-column: 5;
		grid-row: 1;
	}
	& .item-3 {
		grid-column: 5;
		grid-row: 2;
	}
	& .item-4 {
		grid-column: 6 / span 2;
		grid-row: 1 / span 2;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	& img {
		height: 100%; 
		width: 100%;
		object-fit: cover;
	}
`

function ImageGrid() {
	const [ images, setImages ] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then( response => response.json() )
			.then( photos => setImages(photos) )
	}, []);

	return(
		<Grid>
			{
				images.slice(4, 9).map( (image, i) => {
					return (
						<img src={image.url} alt={image.title} className={`item-${i}`} key={image.id} />
					// <div className={`item-${i}`} key={image.id}>
					// 	<img src={image.url} alt={image.title}  />
					// </div> 
					)
				})
			}
		</Grid>
	)
}

export default ImageGrid;