import React from "react";
import HeaderHome from "../../components/Header/HeaderHome/HeaderHome";
import Footer from "../../components/Footer/Footer";
import { MainContent } from "../../style/mainContentTag";
import { ContainerWrapper } from "../../style/containerWrapper";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import RestaurantCard from "../../components/RestauratCard/RestaurantCard";
import Axios from "../../API/index";
import {CardsContainerFlex, H1} from "./HomeStyled";

const Home = () => {
    
    const [restaurantCards, setRestaurantCards] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
       async function fetchRestaurantProfile() {
           const url = "restaurants/";
            const resp = await Axios.get(url);
                setRestaurantCards(resp.data)
                dispatch({
                    type: "FETCHRESTAURANTPROFILE",
                    payload: resp.data,
                });
                //console.log(resp.data);
       }
       fetchRestaurantProfile();
    }, [dispatch])

    return (
        <ContainerWrapper>
            <HeaderHome />
            <MainContent> 
                <H1>Best Rated Restaurants</H1>
                <CardsContainerFlex>
                    {
                    //console.log(restaurantCards)
                    restaurantCards.length > 0 ?
                    restaurantCards.map((card) => {
                        console.log(card)
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
                    }
                </CardsContainerFlex>
           
            </MainContent>
            <Footer />
        </ContainerWrapper>
    );
};
export default Home;