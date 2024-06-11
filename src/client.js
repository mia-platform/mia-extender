const path = require('path')
const axios = require('axios')
const inquirer = require('inquirer')

async function registerExtension(basePath, tenantId, body) {
    const url = path.join(basePath, '/api/extensibility/tenants/', tenantId, '/extensions')

    const opts = {
        headers: {
            Cookie: process.env.COOKIE,
        }
    }

    try {
        const response = await axios.put(url, body, opts)    
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

async function getExtension(basePath, tenantId) {
    const url = path.join(basePath, '/api/extensibility/tenants/', tenantId, 'extensions')
    const opts = {
        headers: {
            Cookie: process.env.COOKIE,
        }
    }

    const response = await axios.get(url, opts)
    return response.data
}

async function activateExtension(basePath, tenantId, extensionId) {
    const url = path.join(basePath, '/api/extensibility/tenants/', tenantId, '/extensions', extensionId, 'activation')

    const body = {
        contextType: 'company',
        contextId: tenantId,
        overrides: []
    }
    const opts = {
        headers: {
            Cookie: process.env.COOKIE,
        }
    }

    try {
        const response = await axios.post(url, body, opts)    
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

async function deleteExtension(basePath, tenantId, extensionId) {
    const url = path.join(basePath, '/api/extensibility/tenants/', tenantId, '/extensions', extensionId)

    const opts = {
        headers: {
            Cookie: process.env.COOKIE,
        }
    }

    try {
        const response = await axios.delete(url, {}, opts)    
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}




module.exports = {
    registerExtension,
    activateExtension,
    getExtension,
    registerQuestions,
    retrieveQuestions,
    deleteExtension,
    selectExtensionQuestions
}