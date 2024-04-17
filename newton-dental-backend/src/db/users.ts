
import { dynamoClient } from "../helpers/dynamodb";
import { UserDetails } from "../helpers/types";

const TABLE_NAME = "Users"

export const getUsers = async () => {
    const params = {
        TableName: TABLE_NAME
    }

    const users = await dynamoClient.scan(params).promise()
    return users
}

export const getUserByUserId = async (id: string) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id,
        }
    }
    const user = await dynamoClient.scan(params).promise()
    return user
}

export const getUserByEmail = async (email_address: string) => {
    const params = {
        TableName : TABLE_NAME,
        ExpressionAttributeValues: {
            ":email": email_address,
          },
          FilterExpression: "Email = :email",
    };

    const user = await dynamoClient.scan(params).promise()
    //console.log(user)

    return user
}

export const createUser = async (newUser: UserDetails) => {
    var params = {
        TableName: TABLE_NAME,
        Item: newUser
    }
    const user = await dynamoClient.put(params).promise()
    console.log(user)
    return user
}

export const updateUserSessionToken = async (userid: string, token: string) => {

    const params = {
        TableName: TABLE_NAME,
        Key: {
            UserId: userid
        },
        UpdateExpression: 'set Authentication.SessionToken = :r',
        ExpressionAttributeValues: {
        ':r': token,
        },
    };

    const user = await dynamoClient.update(params).promise();
}

export const getUserBySessionToken = async (sessionid : string) => {
    const params = {
        TableName : TABLE_NAME,
        ExpressionAttributeValues: {
            ":sessionid": sessionid,
          },
          FilterExpression: "Authentication.SessionToken = :sessionid",
    };

    const user = await dynamoClient.scan(params).promise()

    return user
}

