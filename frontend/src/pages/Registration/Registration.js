import {InputContainer, PrimaryButtonLarge, RegistrationBody, RegistrationContainer} from './RegistrationStyled'
import React, { useState } from 'react'

import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Header/Navbar/Navbar'
import RegistrationTitle from '../../components/RegistrationTitle/RegistrationTitle'
import prepareRegistrationEmail from '../../middleware/prepareRegistrationEmail'
import {useHistory} from "react-router-dom"

const Registration = () => {

    const history = useHistory();

    const [email, setRegistrationEmail] = useState('')

    const changeRegistrationEmailHandler = (e) => {
        console.log(e.target.value)
        setRegistrationEmail(e.target.value)
    }

    const sendRegistrationEmailHandler = (e) => {

        const url = 'https://luna-aries.propulsion-learn.ch/backend/api/auth/registration/'

        const config = prepareRegistrationEmail(email)

        fetch(url, config).then((res) => {
            console.log('registration email sent')
            if(res.status === 201) {
                console.log('push to registration message')
                history.push("/registration/message");
            }
        })
        .catch((err) => console.log(err));
    }

    return (
        <RegistrationContainer>
            <Navbar/>
            <RegistrationBody>
                <RegistrationTitle title='REGISTRATION'/>
                <InputContainer>
                    <input type='text' placeholder='E-Mail address' onChange={changeRegistrationEmailHandler} value={email} />
                </InputContainer>
                <PrimaryButtonLarge onClick={sendRegistrationEmailHandler}>Register</PrimaryButtonLarge>
            </RegistrationBody>
            <Footer/>
        </RegistrationContainer>
    )

}

export default Registration
