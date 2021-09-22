import React from 'react'
import ReactStars from "react-rating-stars-component";
import styled from 'styled-components';

const ReviewCardContainer = styled.div`
    background-color: ${props => props.theme.white};
    min-height: 180px;
    width: 100%;
    margin-bottom: 16px;
    border-radius: ${props => props.theme.borderRadius};
    .ReviewCardHeader{
        height: 65px;
        width: 100%;
        /* background-color: lightblue; */
        border-bottom: 1px solid #EBEBEB;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .ReviewCardBody{
        height: 65px;
        width: 650px;
        padding-top: 10px;
        padding-left: 12px;
        padding-right: 12px;
        font-size: ${props => props.theme.textSizeDefault};
		font-weight: ${props => props.theme.textWeightThin};
		color: ${props => props.theme.textGray};
        /* background-color: lightcyan; */
    }
    .ReviewCardFooter{
        height: 45px;
        width: 650px;
        /* background-color: #cbedcb; */
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 12px;
    }
    .profileImage{
        width: 65px;
        height: 65px;
        object-fit: cover;
    }
    .userStatsContainer{
        /* background-color: lightcyan; */
        margin-left: 8px;
        margin-right: 36px;
    }
    .username{
        margin-bottom: 6px;
        font-size: ${props => props.theme.textSizeL};
		font-weight: ${props => props.theme.textWeightBold};
		color: ${props => props.theme.accentColor};
    }
    .totalReviews{
        font-size: ${props => props.theme.textSizeDefault};
		font-weight: ${props => props.theme.textWeightBold};
		color: ${props => props.theme.textGray};
    }
    .reviewDate{
        flex-grow: 1;
        margin-left: 64px;
        margin-right: 12px;
        text-align: end;
        font-size: ${props => props.theme.textSizeDefault};
		font-weight: ${props => props.theme.textWeightThin};
		color: ${props => props.theme.textGray};
    }
    .viewAllComments{
        flex-grow: 1;
        margin-left: 64px;
        margin-right: 12px;
        text-align: end;
        font-size: ${props => props.theme.textSizeDefault};
		color: ${props => props.theme.accentColor};
    }
`

const PrimaryButton = styled.button`
    width: 120px;
	height: 32px;
	border: none;
	border-radius: ${props => props.theme.buttonBorderRadius};
	background-color: #B5B5B5;
	color: ${props => props.theme.white};
	font-weight: ${props => props.theme.textWeightThin};
    margin-right: 12px;
`

const ReviewCard = (props) => {

    const {review} = props
    console.log("→ | ReviewCard | review", review)

    const handler1 = (e) => {
        console.log('clicked handler 1')
    }

    const handler2 = (e) => {
        console.log('clicked handler 2')
    }

    return (
        <ReviewCardContainer>
            <div className='ReviewCardHeader'>
                <img className='profileImage' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' alt='profile' />
                <div className='userStatsContainer' >
                    <div className='username'>{review.author}</div>
                    <div className='totalReviews'>[6 Reviews in total]</div>
                </div>
                <ReactStars className='stars'
                    count={5}
                    value={review.rating}
                    edit={false}
                    size={20}
                    activeColor="#F8E71C"
                    color="#EBEBEB"
                />
                <div className='reviewDate' >{review.created}</div>
            </div>
            <div className='ReviewCardBody'>{review.text}</div>
            <div className='ReviewCardFooter'>
                <PrimaryButton onClick={handler1}>Likes: {review.likes.length}</PrimaryButton>
                <PrimaryButton onClick={handler2}>Comment</PrimaryButton>
                <div className='viewAllComments'>View all comments</div>
            </div>
        </ReviewCardContainer>
    )
}

export default ReviewCard
