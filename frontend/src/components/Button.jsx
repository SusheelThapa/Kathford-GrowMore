import React from 'react'
import "./Button.css"

const BUTTONTYPES=['btn--primary','btn--outline']
const BUTTONSIZES=['btn--small','btn--medium','btn--large']

export const Button = ({ButtonType,content,ButtonSize}) => {
    const checkButtonInclude=BUTTONTYPES.includes(ButtonType)?ButtonType:BUTTONTYPES[0]
    const checkButtonSize=BUTTONSIZES.includes(ButtonSize)?ButtonSize:BUTTONSIZES[0]
  return (
      <button 
      className={`btn ${checkButtonInclude} ${checkButtonSize}`}>{content}</button>
  )
}
