import {InputContainer, PrimaryButtonLarge, RegistrationBody, RegistrationContainer} from './LoginStyled'
import React, { useState } from 'react'

import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Header/Navbar/Navbar'
import RegistrationTitle from '../../components/RegistrationTitle/RegistrationTitle'
import prepareLoginData from '../../middleware/prepareLoginData'
import {useHistory} from "react-router-dom"

const Registration = () => {

    const history = useHistory();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const changeEmailHandler = (e) => {
        setEmail(e.target.value)
    }

    const changePasswordHandler = (e) => {
        setPassword(e.target.value)
    }

    const loginHandler = (e) => {

        const url = 'https://luna-aries.propulsion-learn.ch/backend/api/auth/token/'

        const config = prepareLoginData(email, password)

        fetch(url, config).then((res) => {
            if(res.status === 200) {
                console.log('user logged in')
            }
            return res.json();
        }).then((data) => {
            // set access token in local storage
            localStorage.setItem('lunaAccessToken', data.access);
            // reroute user to homepage
        }).then(() => {
            history.push("/")
        })
        .catch((err) => console.log(err));
    }

    return (
        <RegistrationContainer>
            <Navbar/>
            <RegistrationBody>
                <RegistrationTitle title='LOGIN'/>
                <InputContainer>
                    <input type='text' placeholder='E-Mail address' onChange={changeEmailHandler} value={email} />
                </InputContainer>
                <InputContainer>
                    <input type='password' placeholder='Password' onChange={changePasswordHandler} value={password} />
                </InputContainer>
                <PrimaryButtonLarge onClick={loginHandler}>Login</PrimaryButtonLarge>
            </RegistrationBody>
            <Footer/>
        </RegistrationContainer>
    )

}

export default Registration
