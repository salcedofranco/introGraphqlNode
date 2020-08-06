'use strict'

const fs = require('fs')
const path = require('path')
const { ApolloServer, gql } = require('apollo-server');

const schema = fs.readFileSync(path.join(__dirname, 'schema.gql'), 'utf-8')

const typeDefs = gql(schema)

const cursos = [
    {
    name: 'Javascript 2020',
    students: users
    }
]

const users = [
    {
    name: 'pepe',
    email: 'jose@gmail.com',
    status: 'DESAPROBADO'
    }, 
    {
    name: 'Giuliana',
    email: 'giu@gmail.com',
    status: 'APROBADO'

    }
]

const resolvers = {
    Query:{
     listUsers(_, args) {
        const { status } = args
        if (!status) return users

        return users.filter(u => u.status === status)

     },
     listCursos(){
         return cursos
     }
    } 
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true
})


server.listen(3000).then(() => {
    console.log(`Server Listening`);
});