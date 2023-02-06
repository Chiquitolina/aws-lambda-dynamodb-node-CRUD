const { v4 } = require('uuid')
const AWS = require('aws-sdk')

const addUser = async(event) => {

    const dynamodbConObj = new AWS.DynamoDB.DocumentClient()
    const { id } = event.pathParameters;

    const {nombre, apellido, email} = JSON.parse(event.body)

    await dynamodbConObj.update({
        TableName: 'UsersTable',
        Key: { id },
        UpdateExpression: 'set nombre = :nombre, apellido = :apellido, email = :email',
        ExpressionAttributeValues: {
            ':nombre':nombre,
            ':apellido': apellido,
            ':email':email
        },
        ReturnValues: 'ALL_NEW'
    }).promise()

    return {
        status: 200,
        body: JSON.stringify({
            message: '200 correctamente actualizado'
        })
    }

}

module.exports = {
    updateUser,
}