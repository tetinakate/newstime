import React from "react";
import { useParams } from "react-router-dom";
import { API } from "../../../constants";
import { useAxios } from "../../../hooks";
import { Layout } from "../../../containers/layout";

import "./post.css";

export const Post = () => {
    const { id } = useParams();
    const { data: post, isLoading } = useAxios({ url: API.post(id) });
    const { data: comments } = useAxios({ url: API.comments() });

    return(
        <Layout isLoading={isLoading} data={post}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <div className="comments-block">
                <>
                    <div className="comments-block__info">Комментарии к посту</div>
                    {
                        comments.filter(comment => comment.postId === Number(id)).map(comment => {
                            return(
                                <div key={comment.id} className="comments-block__comment">
                                    <p><span>{comment.name}</span></p>
                                    <p><span>Email:</span> {comment.email}</p>
                                    <p>{comment.body}</p>
                                </div>
                            )
                        })
                    }
                </>
            </div>

        </Layout>
    )
}
