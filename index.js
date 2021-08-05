import KcAdminClient from 'keycloak-admin'

const adminClient = new KcAdminClient({
    baseUrl: 'http://localhost:8080/auth',
    realmName: 'hexadefence'
})

let execute = async function () {

    await adminClient.auth({
        username: 'hexa',
        password: 'hx@123',
        grantType: 'password',
        clientId: 'nodejs-admin-client'
    })

    const users = await adminClient.users.find();

    console.log(users)
}

execute();
