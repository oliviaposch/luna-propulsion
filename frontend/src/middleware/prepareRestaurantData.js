const prepareRestaurantData = (restaurantName, category, country, street, city, zip, website, phone, email, openingHours, priceLevel, restaurantImage) => {

    const formData = new FormData()

    formData.append('name', restaurantName)
    formData.append('category', category)
    formData.append('country', country)
    formData.append('street', street)
    formData.append('city', city)
    formData.append('zip', zip)
    formData.append('website', website)
    formData.append('phone', phone)
    formData.append('email', email)
    formData.append('opening_hours', openingHours)
    formData.append('price_level', priceLevel)
    formData.append('image', restaurantImage)

    const method = 'POST'

    const headers = new window.Headers({
        Authorization: `Bearer ${localStorage.getItem('lunaAccessToken')}`,
    })

    const restaurantData = {
        method,
        headers,
        body: formData,
    }

    return restaurantData
}

export default prepareRestaurantData;