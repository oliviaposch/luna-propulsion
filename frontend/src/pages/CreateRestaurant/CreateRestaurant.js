import {CreateRestaurantInputBtn, InputContainer, PrimaryButtonLarge, RegistrationBody, RegistrationContainer, Row, RowTitle} from './CreateRestaurantStyled'
import React, { useState } from 'react'

import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Header/Navbar/Navbar'
import RegistrationTitle from '../../components/RegistrationTitle/RegistrationTitle'
import { connect } from 'react-redux';
import prepareRestaurantData from '../../middleware/prepareRestaurantData'

const Registration = (props) => {
    // console.log("→ | Registration | props", props)
    // const {restaurant} = props

    const [restaurantName, setRestaurantName] = useState('')
    // select category
    const [category, setCategory] = useState('')
    // select country
    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')
    const [website, setWebsite] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [openingHours, setOpeningHours] = useState('')
    // select price level
    const [priceLevel, setPriceLevel] = useState('')
    const [restaurantImage, setRestaurantImage] = useState('')

    let fileRefRestaurantImage = React.createRef();

    // === CHANGE HANDLERS ===

    const changeRestaurantNameHandler = (e) => {
        // console.log(e.target.value)
        setRestaurantName(e.target.value)
    }

    const changeCategoryHandler = (e) => {
        // console.log(e.target.value)
        setCategory(e.target.value)
    }

    const changeCountryHandler = (e) => {
        // console.log(e.target.value)
        setCountry(e.target.value)
    }

    const changeStreetHandler = (e) => {
        // console.log(e.target.value)
        setStreet(e.target.value)
    }

    const changeCityHandler = (e) => {
        // console.log(e.target.value)
        setCity(e.target.value)
    }

    const changeZipHandler = (e) => {
        // console.log(e.target.value)
        setZip(e.target.value)
    }

    const changeWebsiteHandler = (e) => {
        // console.log(e.target.value)
        setWebsite(e.target.value)
    }

    const changePhoneHandler = (e) => {
        // console.log(e.target.value)
        setPhone(e.target.value)
    }

    const changeEmailHandler = (e) => {
        // console.log(e.target.value)
        setEmail(e.target.value)
    }

    const changeOpeningHoursHandler = (e) => {
        // console.log(e.target.value)
        setOpeningHours(e.target.value)
    }

    const changePriceLevelHandler = (e) => {
        // console.log(e.target.value)
        setPriceLevel(e.target.value)
    }

    const openImageSelector = (e) => {
		fileRefRestaurantImage.current.click();
	};

    const uploadRestaurantImageHandler = (e) => {
		console.log('uploading image');
		const selectedImage = e.target.files[0]
		console.log(
			'→ | uploadPostImageHandler | selectedImage',
			selectedImage
		);
		setRestaurantImage(selectedImage);
	};

    const createRestaurantHandler = (e) => {

        const url = 'https://luna-aries.propulsion-learn.ch/backend/api/restaurants/'

        const config = prepareRestaurantData(restaurantName, category, country, street, city, zip, website, phone, email, openingHours, priceLevel, restaurantImage)
        console.log("→ | createRestaurantHandler | config", config)

        fetch(url, config).then((res) => {
            if(res.status === 200) {
                console.log('restaurant created')
            }
        })
        .catch((err) => console.log(err));

    }

    return (
        <RegistrationContainer>
            <Navbar/>
            <RegistrationBody>
                <RegistrationTitle title='CREATE NEW RESTAURANT'/>
                <RowTitle>Basic</RowTitle>
                <Row>
                    <InputContainer>
                        <p>Name *</p>
                        <input type='text' onChange={changeRestaurantNameHandler} value={restaurantName} />
                        {/* <div>This field is required</div> */}
                    </InputContainer>
                    <InputContainer>
                        <p>Category *</p>
                        <input type='text' onChange={changeCategoryHandler} value={category} />
                        {/* <div>This field is required</div> */}
                    </InputContainer>
                    <InputContainer>
                        <p>Country *</p>
                        <input type='text' onChange={changeCountryHandler} value={country} />
                        {/* <div>This field is required</div> */}
                    </InputContainer>
                </Row>
                <RowTitle>Address</RowTitle>
                <Row>
                    <InputContainer>
                        <p>Street *</p>
                        <input type='text' onChange={changeStreetHandler} value={street} />
                        {/* <div>This field is required</div> */}
                    </InputContainer>
                    <InputContainer>
                        <p>City *</p>
                        <input type='text' onChange={changeCityHandler} value={city} />
                        {/* <div>This field is required</div> */}
                    </InputContainer>
                    <InputContainer>
                        <p>Zip *</p>
                        <input type='text' onChange={changeZipHandler} value={zip} />
                    </InputContainer>
                </Row>
                <RowTitle>Contact</RowTitle>
                <Row>
                    <InputContainer>
                        <p>Website *</p>
                        <input type='text' onChange={changeWebsiteHandler} value={website} />
                    </InputContainer>
                    <InputContainer>
                        <p>Phone *</p>
                        <input type='text' onChange={changePhoneHandler} value={phone} />
                        {/* <div>This field is required</div> */}
                    </InputContainer>
                    <InputContainer>
                        <p>Email *</p>
                        <input type='email' onChange={changeEmailHandler} value={email} />
                    </InputContainer>
                </Row>
                <RowTitle>Details</RowTitle>
                <Row>
                    <InputContainer>
                        <p>Opening hours *</p>
                        <input type='text' onChange={changeOpeningHoursHandler} value={openingHours} />
                        {/* <div>This field is required</div> */}
                    </InputContainer>
                    <InputContainer>
                        <p>Price level *</p>
                        <input type='text' onChange={changePriceLevelHandler} value={priceLevel} />
                    </InputContainer>
                    <InputContainer>
                        <p>Image</p>
                        <input
						type="file"
						// multiple
						hidden
						accept="image/png, image/jpeg"
						ref={fileRefRestaurantImage}
						onChange={uploadRestaurantImageHandler}
					    />
                        <CreateRestaurantInputBtn onClick={openImageSelector}>CHOOSE A FILE...</CreateRestaurantInputBtn>
                    </InputContainer>
                </Row>
                <PrimaryButtonLarge onClick={createRestaurantHandler}>Create restaurant</PrimaryButtonLarge>
            </RegistrationBody>
            <Footer/>
        </RegistrationContainer>
    )

}

// export default Registration

const mapStateToProps = (state) => {
    const restaurant = state.restaurantReducer
    // console.log("→ | mapStateToProps | restaurant", restaurant)

    return {restaurant}
}

export default connect(mapStateToProps)(Registration)