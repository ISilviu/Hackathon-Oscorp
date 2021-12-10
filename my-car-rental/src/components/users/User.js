import React from 'react'
import * as ql from '../../generated/graphql'

const Users = ({ }) => {
    const { data, loading, error } = ql.useGetUsersQuery({
        variables: {
        },
    });
    console.log('USERS:', data)
    return <>{data}</>
}

export default Users