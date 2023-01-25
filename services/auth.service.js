const userRepository = require("../repositories/user.repository")
const mailer = require("../helpers/mailer")
const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');

exports.emailLogin = async (email, password) => {

    const { data } = await userRepository.findUserByEmail(email)

    const isPasswordValid = await bcrypt.compare(password, data.password)

    if (!isPasswordValid) {
        throw new Error('Wrong Email address or Password.')
    }

    const token = await jwt.sign({ id: data.id }, process.env.TOKEN_SECRET, {
        expiresIn: '7d'
    })

    return {
        data: {
            token,
            user: {
                id: data.id,
                email: data.email,
                fullNames: data.fullNames,
                phone: data.phone,
                location: data.location,
                education: data.education,
                workExperience: data.workExperience,
                workExperience2: data.workExperience2,
                productUpdatesAndCommunityAnnouncements: data.productUpdatesAndCommunityAnnouncements,
                marketNewsletter: data.marketNewsletter,
                registrationDate: data.registrationDate

            }
        }
    }
}


exports.emailRegister = async (fullNames, email, password, role) => {

    const salt = await bcrypt.genSalt(10)

    const hashPassword = await bcrypt.hash(password, salt)
    
    const user = await userRepository.createUser({
        fullNames, 
        email, 
        password: hashPassword, 
        role
    })

    const mail = await mailer(email, 'New registration', `
        <h1>New registration</h1>
        <p>Welcome to your new account. to set your password, use the link below</p>
    `)

    if (mail.error) {
        throw new Error(mail.message)
    }

    return user
}