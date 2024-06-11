const { getExtension } = require("./client")

async function registerQuestions() {
    const questions = [
        {
            type: 'input',
            name: 'basePath',
            message: 'Enter Mia-Platform Console base path:',
        },
        {
            type: 'input',
            name: 'tenantId',
            message: 'Enter tenantId:',
        },
        {
            type: 'checkbox',
            name: 'contexts',
            message: 'Which are the contexts?',
            choices: ['company', 'project']
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the description:',
        },
        {
            type: 'input',
            name: 'entry',
            message: 'Enter the entry URL:',
        },
        {
            type: 'list',
            name: 'extensionType',
            message: 'Select the exension type:',
            choices: ['iframe']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name:',
        },
        {
            type: 'input',
            name: 'routes[0].destinationPath',
            message: 'Enter the destination path for the route:',
        },
        {
            type: 'input',
            name: 'routes[0].icon.name',
            message: 'Enter the icon name for the route:',
            default: 'PiProjectorScreenChartLight'
        },
        {
            type: 'input',
            name: 'routes[0].id',
            message: 'Enter the route ID:',
            default: 'p4samd-home'
        },
        {
            type: 'input',
            name: 'routes[0].labelIntl.en',
            message: 'Enter the label in English:',
        },
        {
            type: 'input',
            name: 'routes[0].labelIntl.it',
            message: 'Enter the label in Italian:',
        },
        {
            type: 'list',
            name: 'routes[0].locationId',
            message: 'Enter the location ID:',
            choices: ['tenant', 'project', 'runtime']
        },
        {
            type: 'input',
            name: 'routes[0].parentId',
            message: 'Enter the parent ID:',
        }
    ]

    return await inquirer.prompt(questions)
}

async function retrieveQuestions() {
    const questions = [
        {
            type: 'input',
            name: 'basePath',
            message: 'Enter Mia-Platform Console base path:',
        },
        {
            type: 'input',
            name: 'tenantId',
            message: 'Enter tenantId:',
        }
    ]

    return await inquirer.prompt(questions)
}

async function selectExtensionQuestions() {
    const questions = [
        {
            type: 'input',
            name: 'basePath',
            message: 'Enter Mia-Platform Console base path:',
        },
        {
            type: 'input',
            name: 'tenantId',
            message: 'Enter tenantId:',
        }
    ]

    const { basePath, tenantId } = await inquirer.prompt(questions)
    const extensions = await getExtension(basePath, tenantId)
    console.log(extensions)
    const extensionIdQuestion = [
        {
            type: 'list',
            name: 'extension',
            message: 'Select the identifier of the extension:',
            choices: extensions.map(ext => ext.extensionId)
        }
    ]

    const { extension } = await inquirer.prompt(extensionIdQuestion)
    return { basePath, tenantId, extension }
}

module.exports = {
    selectExtensionQuestions,
    
}