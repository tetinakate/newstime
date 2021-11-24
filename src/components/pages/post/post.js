import React from "react";
import { useParams } from "react-router-dom";
import { API } from "../../../constants";
import { useAxios } from "../../../hooks";
import { Layout } from "../../../containers/layout";

import "./post.css";

export const Post = () => {
    const { id } = useParams();
    const { data: post, isLoading } = useAxios({ url: API.post(id) });

    return(
        <Layout isLoading={isLoading} data={post}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </Layout>
    )
}
