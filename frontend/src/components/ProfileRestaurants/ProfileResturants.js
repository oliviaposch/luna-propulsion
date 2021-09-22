import React from 'react'
import styled from 'styled-components';

const ProfileRestaurantsContainer = styled.div`
     #pageTitle{
                font-weight: bold;
                height: 50px;
                display: flex;
                align-items: center;
            }   
`

const ProfileRestaurantContainer = styled.div`
    height: 350px;
    display: flex;
    flex-direction: column;    

    #title{    
        height: 50px;    
        border: green 1px solid;
    }      
    
    #stars {        
        height: 60px;
        border: green 1px solid;
    }
    #text {
        border: green 1px solid;
        flex-grow: 1;
    }
`;


const ProfileRestaurant = () => {

    return(
        <ProfileRestaurantContainer>
            
            <div id="title">[TITLE]</div>        
            <div id="stars">
                [STARS]
            </div>
            <div id="text">
                [TEXT]
            </div>
        </ProfileRestaurantContainer>
    )
}


const ProfileRestaurants = () => {

    return (

        <ProfileRestaurantsContainer>
            <div id="pageTitle">RESTAURANTS</div>
            {[1,2,3].map((test,index) =>  <ProfileRestaurant key={index}></ProfileRestaurant>)}    
        </ProfileRestaurantsContainer>
    )
}


export default ProfileRestaurants