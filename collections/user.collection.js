exports.UserCollection = (model) => {
    if (Array.isArray(model)) {
        const collection = model.map((resource) => {
            const {
                id,
                fullname,
                email,
                phone,
                education,
                work_experience,
                work_experience2,
                location,
                role,
                createdAt
            } = resource
        
            return {
                id,
                fullname,
                email,
                phone,
                education,
                work_experience,
                work_experience2,
                location,
                role,
                registered: createdAt
            }
        })

        return collection
    }

    return []
}