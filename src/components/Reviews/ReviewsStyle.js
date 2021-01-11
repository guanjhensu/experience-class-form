import styled from 'styled-components';

export const ReviewsStyle = styled.div`
	padding: 48px calc(100%/18);
	@media (max-width: 744px) {
		padding: 32px calc(100%/18);
	}
	& #comments {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 70px;
		row-gap: 50px;
		@media (max-width: 744px) {
			display: flex;
			gap: 0;
			overflow: auto;
			scroll-snap-type: x mandatory;
		}
	}
`
export const Rating = styled.div`
	margin-bottom: 24px;
	& img {
		margin-right: 8px;
		width: 17px;
	}
	& span {
		font-size: 22px;
    line-height: 26px;
    font-weight: 500;
    margin-right: 3px;
	}
`
export const Comment = styled.div`
	padding: 0 8px;
	margin-right: 60px;
	& div {
		display: flex;
		align-items: center;
		margin-bottom: 16px;
		img {
			width: 56px;
			height: 56px;
			object-fit: cover;
			border-radius: 100%;
		}
		span {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			margin-left: 12px;
			line-height: 20px;
			& p:nth-child(1) {
				font-weight: 500;
				font-size: 16px;
			}
			& p:nth-child(2) {
				color: rgb(113, 113, 113);
				font-weight: 300;
				font-size: 14px;
			}
		}
	}
	& p {
		font-weight: 300;
		line-height: 24px;
	}
	@media (max-width: 744px) {
		flex-basis: 70vw;
		flex-shrink: 0;
		border: 1px solid #dddddd;
		border-radius: 12px;
		padding: 32px 16px 32px 16px;
		margin-right: 10px;
		scroll-snap-align: start;
		& div img {
			width: 40px;
			height: 40px;
		}
	}
`
export const Divider = styled.div`
	height: 1px;
	width: 90%;
	display: block;
	margin: 0 auto;
	background-color: #dddddd;
`