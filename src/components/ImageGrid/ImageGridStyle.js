import styled from 'styled-components';

export const Grid = styled.div`
	padding: 0 calc(100%/18);
	height: 440px;
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	grid-template-rows: repeat(2, 220px);
	gap: 8px;
	& .item-0 {
		grid-column: 1 / span 2;
		grid-row: 1 / span 2;
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
	}
	& img {
		min-height: 100%;
		max-height: 100%;
		height: 100%;
		width: 100%;
		object-fit: cover;
		transition: all 0.4s ease;
	}
	& img:hover {
		filter: brightness(80%);
	}
	& .item-0 img {
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	& .item-4 img {
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	& div {
		position: relative;
	}
	@media (max-width: 744px) {
		& {
			display: flex;
			padding: 0;
			overflow-x: auto;
			overflow-y: hidden;
			scroll-snap-type: x mandatory;
		}
		& div {
			flex-shrink: 0;
			width: 100vw;
			scroll-snap-align: start;
		}
		& .item-0 img {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
		& .item-4 img {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
	}
	}
`
export const CreditPhotographer = styled.a`
	position: absolute;
	bottom: 10px;
	right: 10px;
	color: white;
	text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
	font-size: 12px;
`
export const Loading = styled.div`
	color: grey;
	margin: 10% auto;
	text-align: center;
	font-size: 20px;
`
export const ErrorMsg = styled(Loading)`
	line-height: 1.6;
`