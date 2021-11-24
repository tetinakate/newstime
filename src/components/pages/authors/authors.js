import React from "react";
import { Link } from 'react-router-dom'

import { API } from "../../../constants";
import { Layout } from "../../../containers/layout";
import { useAxios } from "../../../hooks";

export const Authors = () => {
    const { data, isLoading } = useAxios({ url: API.users() })

    return(
        <Layout data={data} isLoading={isLoading}>
            <div className="authors">
                <h1>Author</h1>
                <ul>
                    {
                        data.map(author => {
                            return(
                                <li key={author.id}>
                                    <p><Link to={`/authors/${author.id}`}>{author.name}</Link></p>
                                    <p>Email: {author.email}</p>
                                    <p>Website: {author.website}</p>
                                    <p>Company: {author.company.name}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Layout>
    )
}