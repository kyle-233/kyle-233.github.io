import { GraphQLClient, gql } from 'graphql-request'

const graphQLClient = new GraphQLClient(
    'https://api.github.com/graphql',
    {
        headers: {
            authorization: `Bearer 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`,
        },
    }
)

export const request = async <T>(state: string): Promise<T> => {
    const query = gql`${state}`
    return await graphQLClient.request(query)
}

