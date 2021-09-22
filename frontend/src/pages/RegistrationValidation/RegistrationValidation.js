import {InputContainer, PrimaryButtonLarge, RegistrationBody, RegistrationContainer, Row} from './RegistrationValidationStyled'
import React, { useState } from 'react'

import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Header/Navbar/Navbar'
import RegistrationTitle from '../../components/RegistrationTitle/RegistrationTitle'
import prepareRegistrationData from '../../middleware/prepareRegistrationData'
import {useHistory} from "react-router-dom"

const RegistrationValidation = () => {

    const history = useHistory();

    const [email, setEmail] = useState('')
    const [validationCode, setValidationCode] = useState('')
    const [username, setUsername] = useState('')
    const [location, setLocation] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')

    const changeEmailHandler = (e) => {
        setEmail(e.target.value)
    }

    const changeValidationCodeHandler = (e) => {
        setValidationCode(e.target.value)
    }

    const changeUsernameHandler = (e) => {
        setUsername(e.target.value)
    }

    const changeLocationHandler = (e) => {
        setLocation(e.target.value)
    }

    const changePasswordHandler = (e) => {
        setPassword(e.target.value)
    }

    const changePasswordConfirmationHandler = (e) => {
        setPasswordConfirmation(e.target.value)
    }

    const sendRegistrationHandler = (e) => {

        const url = 'https://luna-aries.propulsion-learn.ch/backend/api/auth/registration/validate/'

        const config = prepareRegistrationData(email, validationCode, username, location, password, password_confirmation)

        fetch(url, config).then((res) => {
            console.log('registration data sent')
            if(res.status === 200) {
                console.log('user created')
                history.push("/login");
            }
        })
    }

    return (
        <RegistrationContainer>
            <Navbar/>
            <RegistrationBody>
                <RegistrationTitle title='VERIFICATION'/>
                <Row>
                    <InputContainer>
                        <input type='text' placeholder='E-Mail address' onChange={changeEmailHandler} value={email} />
                    </InputContainer>
                    <InputContainer>
                        <input type='text' placeholder='Validation code' onChange={changeValidationCodeHandler} value={validationCode} />
                    </InputContainer>
                </Row>
                <Row>
                    <InputContainer>
                        <input type='text' placeholder='Username' onChange={changeUsernameHandler} value={username} />
                    </InputContainer>
                    <InputContainer>
                        <input type='text' placeholder='Location' onChange={changeLocationHandler} value={location} />
                    </InputContainer>
                </Row>
                <Row>
                    <InputContainer>
                        <input type='password' placeholder='Password' onChange={changePasswordHandler} value={password} />
                    </InputContainer>
                    <InputContainer>
                        <input type='password' placeholder='Password repeat' onChange={changePasswordConfirmationHandler} value={password_confirmation} />
                    </InputContainer>
                </Row>
                <PrimaryButtonLarge onClick={sendRegistrationHandler}>Finish registration</PrimaryButtonLarge>
            </RegistrationBody>
            <Footer/>
        </RegistrationContainer>
    )

}

export default RegistrationValidation
