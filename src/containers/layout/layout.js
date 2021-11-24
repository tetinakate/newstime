import React from "react"
import isEmpty from "lodash/isEmpty";

export const Layout = ({ isLoading, data = [], children }) => {
    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isEmpty(data)) {
        return <p>Data not founds</p>
    }

    return (
        <>
            { children }
        </>
    )
}