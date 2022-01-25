import React, { useState, useEffect, useCallback } from "react";
import "./random-post.css";
import { API } from "../../constants";
import { Layout } from "../../containers/layout";
import { loadData } from '../../service'

export const RandomPost = () => {
    const initState = {
        post: [],
        isLoading: true
    }
    const [state, setState] = useState(initState)
    const { post, isLoading } = state

    const randomNumber = (minNum, maxNum) => Math.floor(Math.random() * (maxNum - minNum) + minNum)
    const randomNum = () => randomNumber(0, 100)

    const fetchRandomPost = async (id) => {
        const { data, isLoading } = await loadData(API.post(id))

        setState({
            post: data,
            isLoading
        })
    }

    useEffect(() => {
        fetchRandomPost(randomNum())
    }, [])
    
    const getRandomPost = useCallback(() => fetchRandomPost(randomNum()), [])

    return(
        <Layout data={post} isLoading={isLoading}>
            <div className="random-post-block">
                <h2>Случайный пост</h2>
                <div className="random-post-block__container" key={post.id}>
                    <p><span>{post.title}</span></p>
                    <p>{post.body}</p>
                </div>
                <button className="update-post" onClick={getRandomPost}>Обновить</button>
            </div>
        </Layout>
        
    )
}