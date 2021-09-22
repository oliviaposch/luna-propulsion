import React from "react";
import Navbar from "../../components/Header/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { MainContent } from "../../style/mainContentTag";
import { ContainerWrapper } from "../../style/containerWrapper";
import RestaurantCard from "../../components/RestauratCard/RestaurantCard";
import UserCard from "../../components/UsersCard/UserCard";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import Axios from "../../API/index";
import { CardsContainerFlex, Ul, Li } from "./SearchStyled";

const SearchPage = () => {
    const [restaurantCards, setRestaurantCards] = useState([]);
    const [reviewCards, setReviewCards] = useState([]);
    const [userCards, setUserCards] = useState([]);
    //for navigation
    const [showRestaurants,toggleShowRestaurants] = useState(true)
    const [showReviews,toggleShowReviews] = useState(false)
    const [showUsers,toggleShowUsers] = useState(false)
    

    const restaurantsClickHandler = () => {
        toggleShowReviews(false)
        toggleShowUsers(false)
        toggleShowRestaurants(!showRestaurants)
    }
    const reviewsClickHandler = () => {
        toggleShowRestaurants(false)
        toggleShowUsers(false)
        toggleShowReviews(!showReviews)
    }
    const usersClickHandler = () => {
        toggleShowRestaurants(false)
        toggleShowReviews(false)
        toggleShowUsers(!showUsers)
    }

    useEffect(() => {
        //fetch restaurantList
       async function fetchRestaurantProfile() {
           const url = "restaurants/";
            const resp = await Axios.get(url);
                setRestaurantCards(resp.data)
       }
       //fetch userList
       async function fetchUser() {
        const url = "users/list/";
         const resp = await Axios.get(url);
            setReviewCards(resp.data)
            //console.log(resp.data);
        }
        //fetch reviews List
       async function fetchReviews() {
        const url = "users/list/";
         const resp = await Axios.get(url);
            setUserCards(resp.data)
            //console.log(resp.data);
        }
        fetchReviews();
        fetchUser();
        fetchRestaurantProfile();
    }, [])

    return (
        <ContainerWrapper>
            <Navbar />
            <MainContent>
                <Ul>
                    <Li className={showRestaurants===true ? "active" : ""} onClick={restaurantsClickHandler}>Restaurants</Li>
                    <Li className={showReviews===true ? "active" : ""} onClick={reviewsClickHandler}>Reviews</Li>
                    <Li className={showUsers===true ? "active" : ""} onClick={usersClickHandler}>Users</Li>
                </Ul>

                <CardsContainerFlex>
                    
                    {
                    showRestaurants===true ?
                        //console.log(restaurantCards)
                        restaurantCards.length > 0 ?
                        restaurantCards.map((card) => {
                            //console.log(card)
                            return <RestaurantCard 
                                key={card.id}
                                name={card.name}
                                country={card.country}
                                street={card.street}
                                city={card.city}
                                zip={card.zip}
                                image={card.image}
                                reviews={card.reviews}
                                />
                        }) : null
                    :
                    null
                    }
                    {
                    showReviews===true ?
                        reviewCards.length > 0 ?
                        reviewCards.map((card) => {
                            //console.log(card)
                            return <ReviewCard
                                key={card.id}
                                profile_pic={card.profile_pic}
                                first_name={card.first_name}
                                last_name={card.last_name}
                                description={card.description}
                                />
                        }) : null
                    :
                    null
                    }
                    {
                    showUsers===true ?
                        userCards.length > 0 ?
                        userCards.map((card) => {
                            //console.log(card)
                            return <UserCard
                                key={card.id}
                                profile_pic={card.profile_pic}
                                first_name={card.first_name}
                                last_name={card.last_name}
                                description={card.description}
                                />
                        }) : null
                    :
                    null
                    }
                </CardsContainerFlex>
           
            </MainContent>
            <Footer />
        </ContainerWrapper>
    );
};
export default SearchPage;