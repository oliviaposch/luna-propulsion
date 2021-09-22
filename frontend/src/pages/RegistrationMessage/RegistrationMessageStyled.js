import styled from 'styled-components';

export const RegistrationContainer = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const NavPlaceholder = styled.div`
	min-height: 70px;
	width: 100%;
	text-align: center;
	border-bottom: 1px solid rgb(206, 206, 206);
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${props => props.theme.white};
`;

export const RegistrationBody = styled.div`
	width: 100%;
    height: 100%;
	background-color: ${props => props.theme.bodyBackgroundColor};
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const MessageContainer = styled.p`
	width: 600px;
	text-align: center;
	vertical-align: middle;
	font-size: ${props => props.theme.textSizeL};
	color: ${props => props.theme.textGray};
`

export const PrimaryButtonLarge = styled.button`
	margin: 42px 0;
	padding: 16px 64px;
	border: none;
	border-radius: ${props => props.theme.buttonBorderRadius};
	background-color: ${props => props.theme.accentColor};
	color: ${props => props.theme.white};
	font-size: ${props => props.theme.textSizeL};
	font-weight: ${props => props.theme.textWeightRegular};
	:hover {
			cursor: pointer;
	}
`;

export const FooterPlaceholder = styled.div`
	min-height: 90px;
	width: 100%;
	text-align: center;
	border-top: 1px solid rgb(206, 206, 206);
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${props => props.theme.white};
`;