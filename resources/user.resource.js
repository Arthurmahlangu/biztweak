exports.UserResource = (model) => {
    const {
        id,
        fullname,
        email,
        phone,
        education,
        work_experience,
        work_experience2,
        location,
        role
    } = model

    return {
        id,
        fullname,
        email,
        phone,
        education,
        work_experience,
        work_experience2,
        location,
        role
    }
}