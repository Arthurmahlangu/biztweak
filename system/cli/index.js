const { buildController, buildRepository, buildRoute, buildService, buildValidations } = require("./build")

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
        .command("build:route")
        .description("Build Route, Usage: node ebp build:route <route-name>")
        .argument("<routeName>", "Route Name")
        .action(async (routeName) => {
            console.log(`Building Route: ${routeName}`)
            await buildRoute(routeName)
        })

    program
        .command("build:service")
        .description("Build Service, Usage: node ebp build:service <service-name>")
        .argument("<serviceName>", "Service Name")
        .action(async (serviceName) => {
            console.log(`Building Service: ${serviceName}`)
            await buildService(serviceName)
        })

    program
        .command("build:validations")
        .description("Build Validations, Usage: node ebp build:validations <validations-name>")
        .argument("<validationsName>", "Validations Name")
        .action(async (validationsName) => {
            console.log(`Building Validations: ${validationsName}`)
            await buildValidations(validationsName)
        })
}
