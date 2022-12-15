const ExampleResource = require("../resources/example.resource")

exports.ExampleResource = (model) => {
    if (Array.isArray(model)) {
        const collection = model.map((resource) => (
            return ExampleResource(resource)
        ))

        return collection
    }

    return []
}