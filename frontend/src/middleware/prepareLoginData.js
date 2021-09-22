const prepareLoginData = (email, password) => {
    const formData = new FormData()

    formData.append('email', email)
    formData.append('password', password)

    const method = 'POST'

    const headers = new window.Headers()

    const Login = {
        method,
        headers,
        body: formData,
    }

    return Login
}

export default prepareLoginData;