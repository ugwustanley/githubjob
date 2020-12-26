import React from 'react'
import CheckInput from '../CheckInput/CheckInput'
import Jobs from '../Jobs/Jobs'
import './Main.scss'

const Main = () => {
    return (
        <div className="main">
            <CheckInput />
            <Jobs />
        </div>
    )
}

export default Main;
