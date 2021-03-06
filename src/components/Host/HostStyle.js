import styled from 'styled-components';

export const HostInfo = styled.div`
	padding: 48px calc(100%/18);
	@media (max-width: 744px) {
		padding: 32px calc(100%/18);
	}
	& div:nth-child(1) {
		height: 56px;
		display: flex;
		@media (max-width: 744px) {
			flex-direction: row-reverse;
			justify-content: space-between;
		}
		align-items: center;
		margin-bottom: 24px;
		a {
			display: inline-block;
			width: 56px;
			height: 56px;
			margin-right: 16px;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: 100%;
			}
		}
		div {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			h1 {
				font-size: 22px;
				font-weight: 500;
			}
			p {
				font-size: 14px;
				color: #717171;
			}
		}
	}
	& div:nth-child(2) {
		height: 24px;
		display: flex;
		margin-bottom: 12px;
		font-size: 16px;
		font-weight: 300;
		span {
			padding: 0 12px 0 0;
			display: flex;
			align-items: center;
			white-space:nowrap;
				img {
				height: 16px;
				object-fit: cover;
				margin-right: 8px;
			}
		}
		& span:nth-child(2) {
			padding-left: 12px;
		}
	}
	& p {
		font-weight: 300;
		font-size: 16px;
		line-height: 24px;
	}
	& div:nth-child(4) {
		margin-top: 32px;
		display: inline-flex;
		align-items: center;
		a {
			border: 1px solid black;
			padding: 13px 23px;
			border-radius: 8px;
			text-decoration: none;
			font-weight: 500;
			text-align: center;
			flex-shrink: 0;
		}
		span {
			margin-left: 36px;
			height: 24px;
			display: inline-flex;
			align-items: center;
			img {
				width: 22px;
				height: 22px;
				margin-right: 16px;
			}
			#security {
				margin-left: 0;
				display: inline-block;
				height: auto;
				p {
					display: inline;
					font-size: 12px;
					font-weight: 300;
					line-height: 16px;
				}
				a {
					display: inline;
					text-decoration: underline;
					border: none;
					padding: 0 0 0 3px;
					font-size: 12px;
				}
			}
		}
		@media (max-width: 744px) {
			display: flex;
			flex-direction: column;
			a {
				width: 90%;
				margin-bottom: 32px;
			}
			& span {
				flex-direction: row-reverse;
				margin-left: 0;
				img {
					margin-right: 0;
					margin-left: 16px;
				}
			}
			#security {
				flex-direction: row;
			}
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
