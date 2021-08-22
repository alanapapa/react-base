import React from 'react'

import { ExampleComponent } from 'sharkui'
import 'sharkui/dist/index.css'

const App = () => {
  return (
  <>
  <ExampleComponent text="Hello 😄" />
  <Button text="click" onClick={() => alert('jfdj')} />
  </>
  )
}

const Button = (props) => {
  return (<button {...props} >{props.text}</button>)
}

export default App