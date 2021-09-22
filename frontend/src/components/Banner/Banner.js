import React from 'react'
import styled from "styled-components"


const BannerContainer = styled.div`
    width: 100%;
    min-width: 1200px;    
    min-height: 200px;
    height: 10%;
    /*replace below with url coming from props (api)*/
    background-image: url("https://www.bain.com/contentassets/79711aa9279e4b1281b4d355ccb057f8/local-office-images-zurich_1950x650.jpg");
`;

const Banner = () => {

    return(
        <BannerContainer>
           
        </BannerContainer>

    )
}

export default Banner