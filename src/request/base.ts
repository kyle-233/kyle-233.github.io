import { GraphQLClient, gql } from 'graphql-request'

const graphQLClient = new GraphQLClient(
    'https://api.github.com/graphql',
    {
        headers: {
            authorization: `Bearer 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`,
        },
    }
)

const request = async <T>(state: string): Promise<T> => {
    const query = gql`${state}`
    return await graphQLClient.request(query)
}

export default request