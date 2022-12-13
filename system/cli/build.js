const fs = require("fs")
const path = require("path")

/**
 * Creates a controller file for the given controller name.
 * @param {string} name - The name of the controller.
 * @returns None
 */
exports.buildController = async (name) => {
    const filePath = path.join(__dirname, "../../controllers", `${name}.controller.js`)

    if (fs.existsSync(filePath)) {
        console.log(`Controller ${name} already exists.`)
        return
    }

    const stub = fs.readFileSync(path.join(__dirname, "../stubs/controller.stubs"), "utf8")
    const controller = stub.replace(/controller/g, name)

    let dirs = filePath.split("/")
    dirs.pop()

    const dir = dirs.join("/")
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    }

    fs.writeFile(filePath, controller, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log(`Controller ${name}.controller.js created successfully`)
        }
    })
}

/**
 * Creates a repository file for the given repository name.
 * @param {string} name - The name of the repository.
 * @returns None
 */
exports.buildRepository = async (name) => {
    let repoDir = path.join(__dirname, "../../repositories")

    if (!fs.existsSync(repoDir)) {
        fs.mkdirSync(repoDir, { recursive: true })
    }

    const filePath = path.join(repoDir, `${name}.repository.js`)

    if (fs.existsSync(filePath)) {
        console.log(`Repository ${name} already exists.`)
        return
    }

    const stub = fs.readFileSync(path.join(__dirname, "../stubs/repository.stubs"), "utf8")
    const repository = stub.replace(/repositoryName/g, name)

    let dirs = filePath.split("/")
    dirs.pop()

    const dir = dirs.join("/")
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    }

    fs.writeFile(filePath, repository, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log(`Repository ${name}.repository.js created successfully`)
        }
    })
}

/**
 * Creates a repository file for the given repository name.
 * @param {string} name - The name of the repository.
 * @returns None
 */
exports.buildRoute = async (name) => {
    let routeDir = path.join(__dirname, "../../routes")

    if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true })
    }

    const filePath = path.join(routeDir, `${name}.api.js`)

    if (fs.existsSync(filePath)) {
        console.log(`Route ${name} already exists.`)
        return
    }

    const stub = fs.readFileSync(path.join(__dirname, "../stubs/route.stubs"), "utf8")
    const route = stub.replace(/routeName/g, name)

    let dirs = filePath.split("/")
    dirs.pop()

    const dir = dirs.join("/")
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    }

    fs.writeFile(filePath, route, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log(`Route ${name}.api.js created successfully`)
        }
    })
}

/**
 * Creates a repository file for the given repository name.
 * @param {string} name - The name of the repository.
 * @returns None
 */
exports.buildService = async (name) => {
    let servDir = path.join(__dirname, "../../services")

    if (!fs.existsSync(servDir)) {
        fs.mkdirSync(servDir, { recursive: true })
    }

    const filePath = path.join(servDir, `${name}.service.js`)

    if (fs.existsSync(filePath)) {
        console.log(`Service ${name} already exists.`)
        return
    }

    const stub = fs.readFileSync(path.join(__dirname, "../stubs/service.stubs"), "utf8")
    const route = stub.replace(/serviceName/g, name)

    let dirs = filePath.split("/")
    dirs.pop()

    const dir = dirs.join("/")
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    }

    fs.writeFile(filePath, route, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log(`Service ${name}.service.js created successfully`)
        }
    })
}

/**
 * Creates a repository file for the given repository name.
 * @param {string} name - The name of the repository.
 * @returns None
 */
exports.buildValidations = async (name) => {
    let valDir = path.join(__dirname, "../../middlewares/validators")

    if (!fs.existsSync(valDir)) {
        fs.mkdirSync(valDir, { recursive: true })
    }

    const filePath = path.join(valDir, `${name}.validations.js`)

    if (fs.existsSync(filePath)) {
        console.log(`Validations ${name} already exists.`)
        return
    }

    const stub = fs.readFileSync(path.join(__dirname, "../stubs/validations.stubs"), "utf8")
    const route = stub.replace(/validationsName/g, name)

    let dirs = filePath.split("/")
    dirs.pop()

    const dir = dirs.join("/")
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    }

    fs.writeFile(filePath, route, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log(`Validations ${name}.validations.js created successfully`)
        }
    })
}
