import React, { useEffect } from 'react'
import Header from '../header/Header'
import Content from '../content/Content'

interface IMainProps { }

const Main: React.FC<IMainProps> = () => {

    return (
        <>
            <Header />
            <Content />
        </>
    )
}

export default Main