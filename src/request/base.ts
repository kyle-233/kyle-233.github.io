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

