const { buildController, buildRepository } = require("./build")

/**
 * Initializes the program.
 * @param {Program} program - The program object.
 * @returns none
 */
exports.init = async (program) => {
    program
        .command("build:controller")
        .description("Build Controller, Usage: node ebp build:controller <controller-name>")
        .argument("<controllerName>", "Controller Name")
        .action(async (controllerName) => {
            console.log(`Building Controller: ${controllerName}`)
            await buildController(controllerName)
        })

    program
        .command("build:repository")
        .description("Build Repository, Usage: node ebp build:repository <repository-name>")
        .argument("<repositoryName>", "Repository Name")
        .action(async (repositoryName) => {
            console.log(`Building Repository: ${repositoryName}`)
            await buildRepository(repositoryName)
        })

    program
        .command("build:resource")
        .description("Build Resource, Usage: node ebp build:repository <resource-name>")
        .argument("<resourceName>", "Resource Name")
        .action(async (resourceName) => {
            console.log(`Building Resource: ${resourceName}`)
            await buildRepository(resourceName)
        })

    program
        .command("build:service")
        .description("Build Service, Usage: node ebp build:service <service-name>")
        .argument("<serviceName>", "Service Name")
        .action(async (serviceName) => {
            console.log(`Building Service: ${serviceName}`)
            await buildRepository(serviceName)
        })
}
