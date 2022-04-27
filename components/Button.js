import React from 'react'
import './Button.css'
const STYLE=['btn-primary' ,'btn-outline'];
const SIZE=['brt-large' , 'btn-medium'];
function Button({
    style,
    children,
    type,
    size,
    onClick
})
{
    const checkStyle = STYLE.includes(style) ? style : STYLE[0];
    const checkSize = SIZE.includes(size) ? size : SIZE[0];
    return(
        <button className={`btn ${checkStyle} ${checkSize}`} type={type}
        onClick={onClick}>
        {children}
        </button>
    )

}
export default Button