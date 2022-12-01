const userResource = (UserModel) => {
    const { 
        id, 
        email, 
        roles 
    } = UserModel

    return { 
        id, 
        email,
        roles 
    }
}

module.exports = userResource