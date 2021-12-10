module.exports = {
    schema: [
        {
            'https://notable-leopard-55.hasura.app/v1/graphql': {
                headers: {
                    "x-hasura-admin-secret": "1gUNJM1ECJ1hgkO5Po4ZqIhilM1h5RDFAxjIuKAfgn75TBDxqUKRp92YYuvoGtec",
                },
            },
        },
    ],
    documents: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.graphql'],
    overwrite: true,
    generates: {
        './src/generated/graphql.tsx': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                skipTypename: false,
                withHooks: true,
                withHOC: false,
                withComponent: false,
            },
        },
        './graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
};