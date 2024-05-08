import React, { useEffect, useState } from 'react'

const LifecycleFunction = (props) => {
    //initialization
    const [color, setColor] = useState("red")
    //Updation
    useEffect(() => {
        setTimeout(() => {
            setColor(props.color)
        }, 3000)

    })
    return (
        <div>
            <h3>LifeCycle Function based</h3>
            {/* Render */}
            Color is:{color}
        </div>
    )
}

export default LifecycleFunction
