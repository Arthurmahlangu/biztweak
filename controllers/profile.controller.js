const { successResponse, failResponse } = require("../helpers/methods")
const profileService = require("../services/profile.service")

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getProfile = async (req, res) => {
    const profile = await profileService.getProfile(req.params.id)
    
    if (!profile.error) {
        res.send(
            successResponse(
                "Profile found",
                profile.data
            )
        )
    }

    res.send(
        failResponse(profile.message, null)
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getProfiles = async (req, res) => {
    const profiles = await profileService.getProfiles()
    
    if (!profiles.error) {
        res.send(
            successResponse(
                "Profiles found",
                profiles.data
            )
        )
    }

    res.send(
        failResponse(profiles.message, null)
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.updateProfile = async (req, res) => {
    const profile = await profileService.updateProfile(req.params.id, req.body)
    
    if (!profile.error) {
        res.send(
            successResponse("Profile updated successfully", null)
        )
    }

    res.send(
        failResponse(profile.message, null)
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.updatePassword = async (req, res) => {
    const profile = await profileService.updatePassword(req.params.id, req.body.password)
    
    if (!profile.error) {
        res.send(
            successResponse("Password updated successfully", null)
        )
    }

    res.send(
        failResponse(profile.message, null)
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.deleteProfile = async (req, res) => {
    const profile = await profileService.deleteProfile(req.params.id)
    
    if (!profile.error) {
        res.send(
            successResponse("Profile deleted successfully", null)
        )
    }

    res.send(
        failResponse(profile.message, null)
    )
}