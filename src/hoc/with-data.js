import React from "react";
import isEmpty from "lodash/isEmpty";
import { useAxios } from '../hooks'

export const withDataHOC = ({ url, needParms = false }) => (Component) => {
    const FetchData = () => {
        let prepareUrl = url

        if (needParms) {
            const urlParts = window.location.pathname.split('/')
            const param = urlParts[urlParts.length-1]

            prepareUrl = url(param)
        }

        const { data, isLoading, deletPost } = useAxios({ url: prepareUrl })

        if (isLoading) {
            return <p>Loading...</p>
        }

        if (isEmpty(data)) {
            return <p>Data not founds</p>
        }

        return <Component data={data} deletPost={deletPost} />
    }

    return FetchData
}