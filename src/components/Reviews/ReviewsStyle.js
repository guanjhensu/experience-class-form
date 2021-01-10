import styled from 'styled-components';

export const ReviewsStyle = styled.div`
	padding: 48px calc(100%/18);
	& #comments {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 70px;
		row-gap: 50px;
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
    font-weight: 600;
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
	}
`
export const Divider = styled.div`
	height: 1px;
	width: 90%;
	display: block;
	margin: 0 auto;
	background-color: #dddddd;
`