import {GraphQLServer} from "graphql-yoga"

// Query, mutation(데이터 추가, 삭제), subscribe(구독)
// ! : 필수로 return 이 되어야함
const typeDefs = `
    type Query {
        sayHello : String!
    }
`; // 인자값과 리턴되는 값의 타입을 지정해주는 것
const resolvers = {
    Query : {
        sayHello: () => "Hi there :0)"
    }
}; // 함수의 비지니스 로직이 실제로 들어가는 부분

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => 
    console.log('My first GraphQL Server is running on localhost:4000')
)