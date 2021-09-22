const prepareRegistrationData = (email, validationCode, username, location, password, password_confirmation) => {
    const formData = new FormData()

    formData.append('email', email)
    formData.append('code', validationCode)
    formData.append('username', username)
    formData.append('location', location)
    formData.append('password', password)
    formData.append('password_confirmation', password_confirmation)

    const method = 'PATCH'

    const headers = new window.Headers()

    const registrationData = {
        method,
        headers,
        body: formData,
    }

    return registrationData
}

export default prepareRegistrationData;