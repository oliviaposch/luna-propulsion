import styled from 'styled-components';

export const PageContainer = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const RestaurantPageImageContainer = styled.div`
    width: 100%;
    min-height: 500px;
	img {
		width: 100%;
    	height: 500px;
		object-fit: cover;
	}
	.overlay {
		background-color: rgba(0, 0, 0, 0.5);
		position: absolute;
		width: 100%;
		height: 200px;
	}
	.titlecontainer {
		width: 100%;
    	height: 100%;
    	padding: 50px 130px 0 130px;
		/* background-color: lightcoral; */
		p {
			color: white
		}
	}
	.restaurantName {
		font-size: ${props => props.theme.textSizeXL};
		font-weight: ${props => props.theme.textWeightBold};
		padding-top: 10px;
		padding-bottom: 16px;
	}
	.starsAndReviews {
		display: flex;
		flex-direction: row;
	}
	.numberOfReviews {
		margin-left: 24px;
		margin-top: 4px;
		font-size: ${props => props.theme.textSizeL};
		font-weight: ${props => props.theme.textWeightThin};
	}
`

// css for map div
export const RestaurantTitle = styled.div`
    width: 820px;
    min-height: 130px;
    /* background-color: lightblue; */
`

export const RestaurantPageBodyContainer = styled.div`
	width: 100%;
    height: 100%;
	background-color: ${props => props.theme.bodyBackgroundColor};
	display: flex;
	flex-direction: column;
	align-items: center;
	.writeRestaurantReviewContainer{
		width: 830px;
		height: 430px;
		margin-top: 55px;
		/* background-color: lightblue; */
	}
	.stars{
		margin-left: 36px;
		margin-bottom: 12px;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		/* background-color: lightblue; */
	}
	.starsText{
		margin-left: 36px;
		font-size: ${props => props.theme.textSizeL};
		font-weight: ${props => props.theme.textWeightThin};
		color: ${props => props.theme.textGray};
	}
	.writeReviewFooter{
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.requiredText{
		color: ${props => props.theme.textRed};
	}
`;

export const ReviewsColumn = styled.div`
    height: 100%;
    min-width: 650px;
    margin-right: 20px;
    display: flex;
	flex-direction: column;
	align-items: center;
	.filterContainer{
		min-height: 80px;
    	width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.reviewCard{
		background-color: ${props => props.theme.white};
		min-height: 180px;
    	width: 100%;
		margin-bottom: 16px;
	}
`

export const FilterInputField = styled.input`
	width: 830px;
	height: 40px;
	margin-right: 30px;
	/* flex-grow: 2; */
	padding-left: 24px;
	border: 1px solid #EBEBEB;
	border-radius: ${props => props.theme.borderRadius};
	::placeholder {
	color: ${props => props.theme.textLightGray};
	}
`

export const PrimaryButtonMedium = styled.button`
	padding: 10px 30px;
	border: none;
	border-radius: ${props => props.theme.buttonBorderRadius};
	background-color: ${props => props.theme.accentColor};
	color: ${props => props.theme.white};
	font-weight: ${props => props.theme.textWeightThin};
	:hover {
			cursor: pointer;
	}
`;

export const RestaurantDetailsColumn = styled.div`
    height: 100%;
    min-width: 600px;
    background-color: #F5F5F5;
    display: flex;
	flex-direction: column;
	.openingHours{
		width: 100%;
		min-height: 60px;
		display: flex;
		flex-direction: row;
		align-items: center;
		border-bottom: 1px solid #D8D8D8;
	}
	.priceLevel{
		width: 100%;
		min-height: 50px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.svg{
		margin-left: 16px;
		margin-right: 24px;
	}
	.buttons{
		width: 100%;
		min-height: 40px;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		:hover {
			cursor: pointer;
		}
	}
`

export const PrimaryButtonDetailColumn = styled.button`
	width: 230px;
	height: 38px;
	border: none;
	border-radius: ${props => props.theme.buttonBorderRadius};
	background-color: ${props => props.theme.accentColor};
	color: ${props => props.theme.white};
	font-weight: ${props => props.theme.textWeightThin};
	:hover {
			cursor: pointer;
	}
`;

