import React from 'react'
import './error-indicator.css'
import image from './repair-icon.jpg'

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={image} alt="error-icon" />
      <span className="error">Что здесь можно сказать...</span>
      <span> что-то пошло очень сильно не так </span>
      <span> (но мы уже вызываем шамана для починки) </span>
    </div>
  )
}

export default ErrorIndicator
