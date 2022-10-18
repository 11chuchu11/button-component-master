import React from 'react'
import './button.scss'
import 'material-icons/iconfont/material-icons.css';

interface props{
    children?: React.ReactNode
    icon?:string
    startIcon?: string
    endIcon?:string
    color?: 'default' | 'primary' | 'secondary' | 'danger' | 'defaultExampleHover' | 'primaryExampleHover' | 'secondaryExampleHover' | 'dangerExampleHover'
    variant?: 'normal' | 'outline' | 'text'
    size?: 'sm' | 'md' | 'lg'
    disableShadow?: boolean
    disable?: boolean
}

const choseButton = (buttonType:string)=>{
    switch (buttonType){
        case 'normal':
            return 'buttonNormal'
        case 'text':
            return 'buttonText'
        case 'outline':
            return 'buttonOutlined'
    } 
}

const isOutlinedText = (buttonType:string, colorOutlinedText:string, colorNormal:string) => {
    if(buttonType === 'text' || buttonType === 'outline')
        return colorOutlinedText
    
    return colorNormal
}

const choseColor = (colorType:string, buttonType:string)=>{
    switch(colorType){
        case 'default':
            return isOutlinedText(buttonType, 'colorDefaultOutlinedText', 'colorDefault')
        case 'primary':
            return isOutlinedText(buttonType, 'colorPrimaryOutlinedText', 'colorPrimary')
        case 'secondary':
            return isOutlinedText(buttonType, 'colorSecondaryOutlinedText', 'colorSecondary')
        case 'danger':
            return isOutlinedText(buttonType, 'colorDangerOutlinedText', 'colorDanger')
        case 'defaultExampleHover':
            return isOutlinedText(buttonType, 'exampleDefaultOutlinedTextHover', 'exampleDefaultHover')
        case 'primaryExampleHover':
            return isOutlinedText(buttonType, 'examplePrimaryOutlinedTextHover', 'examplePrimaryHover')
        case 'secondaryExampleHover':
            return isOutlinedText(buttonType, 'exampleSecondaryOutlinedTextHover', 'exampleSecondaryHover')
        case 'dangerExampleHover':
            return isOutlinedText(buttonType, 'exampleDangerOutlinedTextHover', 'exampleDangerHover')

    }
}

const choseSize = (sizeType:string) => {
    switch(sizeType){
        case 'sm':
            return 'sizeSmall'
        case 'md':
            return 'sizeMedium'
        case 'lg':
            return 'sizeLarge'
    }
}

const isDisabledShadow = (shadow:boolean) => {
    if (shadow)
        return ''
    return 'buttonDisabledShadow'
}


const Button = ({children, startIcon='', endIcon='', color='default', variant='normal', size='md', disableShadow=false, disable=false}:props) =>{
        return <button
            disabled={disable}
            className={`button ${choseButton(variant)} ${choseColor(color, variant)} ${choseSize(size)} ${isDisabledShadow(disableShadow)}`}>
                {startIcon !== '' &&<span className='material-icons'>{startIcon}</span>}
                <span>{children}</span>
                {endIcon !== ''&&<span className='material-icons'>{endIcon}</span>}
            </button>
    }
export default Button