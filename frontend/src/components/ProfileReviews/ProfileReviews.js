import React from 'react'
import styled from 'styled-components';

const ProfileReviewsContainer = styled.div`
    #pageTitle{
                font-weight: bold;
                height: 50px;
                display: flex;
                align-items: center;
            }       
`

const ProfileReviewContainer = styled.div`
    border: green 1px solid;
    height: 350px;
    display: flex;
    flex-direction: column;
    
    #header {
        border: green 1px solid;
        display: flex;
        height: 50px;
        #title{
            width: 450px;
        }
        #datetime{
            border: green 1px solid;
            display: flex;
            justify-content: flex-end;
            flex-grow: 1;
        }
    }
    #stars {
        border: green 1px solid;
        height: 60px;
    }
    #text {
        border: green 1px solid;
        flex-grow: 1;
    }
`;


const ProfileReview = () => {

    return (    
       
        <ProfileReviewContainer>                
            <div id="header">
                <div id="title">[TITLE]</div>
                <div id="datetime">[DATE AND TIME]</div>
            </div>
            <div id="stars">
                [STARS]
            </div>
            <div id="text">
                [TEXT]
            </div>
        </ProfileReviewContainer>
) 
}


const ProfileReviews = () => {

    return (
        <ProfileReviewsContainer>
            <div id="pageTitle">REVIEWS</div>
            {[1,2,3].map((test,index) =>  <ProfileReview key={index}></ProfileReview>)}               
        </ProfileReviewsContainer>
    )
}

export default ProfileReviews