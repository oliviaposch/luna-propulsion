import {FilterInputField, PageContainer, PrimaryButtonDetailColumn, RestaurantPageBodyContainer, RestaurantPageImageContainer} from './WriteReviewStyled'
import React, { useState } from 'react'

import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Header/Navbar/Navbar'
import ReactStars from "react-rating-stars-component";

const WriteReview = () => {

    const [reviewText, setReviewText] = useState('')

    const changeReviewTextHandler = (e) => {
        setReviewText(e.target.value)
    }

    const submitReviewHandler = (e) => {
        console.log('submit review')
    }

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <PageContainer>
            <Navbar/>
            <RestaurantPageImageContainer>
                <div className='overlay'>
                    <div className='titlecontainer'>
                            <p className='restaurantName'>[Läderach Chocolatier Suisse]</p>
                            <div className='starsAndReviews'>
                                <ReactStars
                                    count={5}
                                    value={4}
                                    onChange={ratingChanged}
                                    edit={false}
                                    size={20}
                                    activeColor="#F8E71C"
                                    color="#EBEBEB"
                                />
                                <p className='numberOfReviews'>[68] reviews</p>
                            </div>
                    </div>
                </div>
                <img src='https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80' alt=''/>
            </RestaurantPageImageContainer>
            <RestaurantPageBodyContainer>
                <div className='writeRestaurantReviewContainer'>
                    <div className='stars'>
                        <ReactStars
                            count={5}
                            value={0}
                            onChange={ratingChanged}
                            size={44}
                            activeColor="#F8E71C"
                            color="#EBEBEB"
                        />
                        <div className='starsText'>Select your rating</div>
                    </div>
                    <FilterInputField type='text' placeholder='Write a review...' onChange={changeReviewTextHandler} value={reviewText} />
                    <div className='writeReviewFooter'>
                        <div className='requiredText'>This field is required</div>
                        <PrimaryButtonDetailColumn onClick={submitReviewHandler}>SUBMIT REVIEW</PrimaryButtonDetailColumn>
                    </div>
                </div>
            </RestaurantPageBodyContainer>
            <Footer/>
        </PageContainer>
    )
}

export default WriteReview