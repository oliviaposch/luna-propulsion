const prepareRegistrationEmail = (email) => {
    const formData = new FormData()

    formData.append('email', email)

    const method = 'POST'

    const headers = new window.Headers()

    const registrationEmailData = {
        method,
        headers,
        body: formData,
    }

    return registrationEmailData
}

export default prepareRegistrationEmail;