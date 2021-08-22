import React, { Children } from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Button = ({ type, text, children }) => {
  let style
  switch (type) {
    case 'primary':
      style = styles.primary
      break
    case 'dashed':
      style = styles.dashed
      break
    case 'text':
      style = styles.text
      break
    case 'link':
      style = styles.link
      break
    default:
      style = styles.dflt
      break
  }
  return <button className={style}>{children}</button>
}
