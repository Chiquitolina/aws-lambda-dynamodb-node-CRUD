const AWS = require('aws-sdk')

const addUser = async(event) => {

    const dynamodbConObj = new AWS.DynamoDB.DocumentClient()

    const {nombre, apellido, email} = JSON.parse(event.body)
    const date = new Date()
    let id = crypto.randomUUID()

    const newUser = {
        id,
        nombre,
        apellido,
        email,
    }

    await dynamodbConObj.put({
        TableName: 'UsersTable',
        Item: newUser
    }).promise()

    return {
        status: 200,
        body: JSON.stringify(newUser)
    }

}

module.exports = {
    addUser,
}