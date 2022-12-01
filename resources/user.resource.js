const userResource = (UserModel) => {
    const { 
        id, 
        fullnames,
        email,
        roles 
    } = UserModel

    return { 
        id, 
        fullnames,
        email,
        roles 
    }
}

module.exports = userResource