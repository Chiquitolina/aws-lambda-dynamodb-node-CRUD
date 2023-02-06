const AWS = require('aws-sdk')

const getUser = async(event) => {

    const dynamodbConObj = new AWS.DynamoDB.DocumentClient()
    const {id} = event.pathParameters;

    const result = await dynamodbConObj.get({
        TableName: 'UsersTable',
        Key: {
            id: id
        }
    }).promise()

    const task = result.Item

    return {
        status: 200,
        body: task
    }
}

module.exports = {
    getUser,
}