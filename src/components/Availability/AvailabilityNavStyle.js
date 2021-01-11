import styled from 'styled-components';

export const Nav = styled.div`
	background-color: white;
	display: none;
	@media (max-width: 744px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px 24px;
		position: sticky;
		bottom: 0;
		border-top: 1px solid #dddddd;
		a {
			background-color: #dc1163;
			color: white;
			text-decoration: none;
			padding: 15px 30px;
			border-radius: 8px;
		}
		& span:nth-child(1) {
			font-size: 16px;
		}
	}
` 