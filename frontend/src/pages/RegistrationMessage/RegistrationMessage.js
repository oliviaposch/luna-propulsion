import {MessageContainer, PrimaryButtonLarge, RegistrationBody, RegistrationContainer} from './RegistrationMessageStyled'

import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Header/Navbar/Navbar'
import React from 'react'
import RegistrationTitle from '../../components/RegistrationTitle/RegistrationTitle'
import {useHistory} from "react-router-dom"

const RegistrationMessage = () => {

    const history = useHistory();

    const redirectToValidationHandler = (e) => {
        history.push("/registration/validate");

    }

    return (
        <RegistrationContainer>
            <Navbar/>
            <RegistrationBody>
                <RegistrationTitle title='REGISTRATION'/>
                <MessageContainer>
                    Thanks for your registration.
                    Our hard working monkeys are preparing a digital message
                    called E-Mail that will be sent to you soon.
                    Since monkeys arent good in writing the message could end up in you junk folder.
                    Our apologies for any inconvienience.
                </MessageContainer>
                <PrimaryButtonLarge onClick={redirectToValidationHandler}>Continue to signup</PrimaryButtonLarge>
            </RegistrationBody>
            <Footer/>
        </RegistrationContainer>
    )

}

export default RegistrationMessage
