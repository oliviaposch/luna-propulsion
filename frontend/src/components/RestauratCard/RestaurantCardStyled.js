import styled from "styled-components";

export const CardContainer = styled.div`
    width: 271px;
    height: 410px;
    box-shadow: 0px 0px 13px -3px rgb(0 0 0 / 20%);
    margin-bottom: 70px;
    padding: 1.2rem;
    border: 1px solid #EBEBEB;
    box-sizing: border-box;
    border-radius: 3px;
    border-top: 9px solid #E47D31;
    overflow: hidden;
    position:relative;
    &:hover{
        opacity: 0.5;
    }
    
`;
export const RestaurantName = styled.p`
    font-size: 1.4rem;
    margin-bottom: .5rem;
`;
export const RestaurantAddress = styled.p`
    margin-bottom: .5rem;
`;
export const CardImageContainer = styled.div`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
`;
export const CardImage = styled.img`

`;
export const CardReviews = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
`;
export const ContainerReviewNum = styled.div`

`;
