import React from 'react'
import {Button} from "antd"

function BlockButton({text,onClick,style,className}) {
    return (
        <div className="site-button-ghost-wrapper">
         <Button ghost style={style} onClick={onClick} className={className}>
             {text}</Button>   
        </div>
    )
}

export default BlockButton
