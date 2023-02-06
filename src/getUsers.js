const AWS = require('aws-sdk')

const getUsers = async(event) => {

    const dynamodbConObj = new AWS.DynamoDB.DocumentClient()

    const result = await dynamodbConObj.scan({
        TableName: 'UsersTable'
    }).promise()

    const users = result.Items

    return {
        status: 200,
        body: { users }
    }

}

module.exports = {
    getUsers,
}