import React from 'react'
import './myStyle.css'
import styles from './mystyle.module.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
    const heading = {
        fontSize: '80px',
        color: 'blue'
    }
    return (
        <div>
            <h1 className={`${className} font-xl`}> Stylesheet </h1>
            <h1 style={heading}> Inline</h1>
            <h1 className ='error'> Error </h1>
            <h1 className = {styles.success}> Success</h1>
        </div>
    )
}

export default Stylesheet
