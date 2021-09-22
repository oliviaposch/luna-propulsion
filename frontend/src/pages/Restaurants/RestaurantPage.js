import {FilterInputField, PageContainer, PrimaryButtonDetailColumn, PrimaryButtonMedium, RestaurantDetailsColumn, RestaurantPageBodyContainer, RestaurantPageImageContainer, ReviewsColumn} from './RestaurantPageStyled'
import React, { useEffect, useState } from 'react'

import { ReactComponent as Clock } from '../../assets/svgs/clock.svg';
import Footer from '../../components/Footer/Footer'
import { ReactComponent as Money } from '../../assets/svgs/money.svg';
import Navbar from '../../components/Header/Navbar/Navbar'
import ReactStars from "react-rating-stars-component";
import ReviewCard from '../../components/ReviewCard/ReviewCardRestaurantPage'
import { connect } from 'react-redux';
import defaultImage from '../../assets/images/barBuffet.png'
import getRestaurantData from '../../middleware/getRestaurantData'

const RestaurantPage = (props) => {

    // console.log('props', props)

    const [filterValue, setFilterValue] = useState('')
    const [avgStars, setAvgStars] = useState(0)

    const {restaurantData} = props

    const reviews = restaurantData.reviews

    console.log("→ | RestaurantPage | restaurantData", restaurantData)

    const avgStarsRating = (restaurantData) => {
        const sum = restaurantData.reviews.reduce((a, b) => a + b.rating, 0)
        const avg = (sum / restaurantData.reviews.length) || 0
        return avg
    }

    useEffect(() => {
        if(restaurantData.reviews) {
            console.log(avgStarsRating(restaurantData))
            setAvgStars(avgStarsRating(restaurantData))
        }
    }, [restaurantData])

    useEffect(() => {
        getRestaurantData(props.dispatch)
    }, [])

    const changeFilterValueHandler = (e) => {
        setFilterValue(e.target.value)
    }

    const filterListHandler = (e) => {
        console.log('filter list')
    }

    return (
        <PageContainer>
            <Navbar/>
            <RestaurantPageImageContainer>
                <div className='overlay'>
                    <div className='titlecontainer'>
                            <p className='restaurantName'>{restaurantData ? restaurantData.name : null}</p>
                            <div className='starsAndReviews'>
                                {avgStars ? <ReactStars
                                    count={5}
                                    value={avgStars}
                                    edit={false}
                                    size={20}
                                    isHalf={true}
                                    activeColor="#F8E71C"
                                    color="#EBEBEB"
                                /> : null}
                                <p className='numberOfReviews'>{restaurantData.reviews ? restaurantData.reviews.length : null} reviews</p>
                            </div>
                    </div>
                </div>
                <img src='https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80' alt=''/>
            </RestaurantPageImageContainer>
            <RestaurantPageBodyContainer>
                <ReviewsColumn>
                    <div className='filterContainer'>
                        <FilterInputField type='text' placeholder='Filter list...' onChange={changeFilterValueHandler} value={filterValue} />
                        <PrimaryButtonMedium onClick={filterListHandler}>FILTER</PrimaryButtonMedium>
                    </div>
                    { reviews && reviews !==0 ?
                        reviews.map((review) => {
                            return (
                                <ReviewCard review={review} key={review.created}/>
                            )
                        })
                        : null
                    }
                </ReviewsColumn>
                <RestaurantDetailsColumn>
                    <div className='openingHours'>
                        <Clock className='svg'/>
                        <div>{restaurantData ? restaurantData.opening_hours : null}</div>
                    </div>
                    <div className='priceLevel'>
                        <Money className='svg'/>
                        <div>Price level: {restaurantData ? restaurantData.price_level : null}</div>
                    </div>
                    <div className='buttons'>
                        <PrimaryButtonDetailColumn onClick={filterListHandler}>WRITE A REVIEW</PrimaryButtonDetailColumn>
                        <PrimaryButtonDetailColumn onClick={filterListHandler}>EDIT DATA</PrimaryButtonDetailColumn>
                    </div>
                </RestaurantDetailsColumn>
            </RestaurantPageBodyContainer>
            <Footer/>
        </PageContainer>
    )
}

// export default RestaurantPage

const mapStateToProps = (state) => {
    // console.log("→ | mapStateToProps | state", state)

	const restaurantData = state.restaurantReducer.restaurantData

	return {restaurantData};
};

export default connect(mapStateToProps)(RestaurantPage)