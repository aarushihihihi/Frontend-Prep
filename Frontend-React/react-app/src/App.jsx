import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Button from './components/Button'
import { Product } from './Product'
import { ProductTab } from './components/ProductTab'
import Final from './Activity/Final'
import Amazon from './AmazonCards/Amazon'
import Card from './AmazonCards/Card'
import Form from './components/Form'
function App() {
  const [count, setCount] = useState(0)

  return (
  <>

  <Form/>
<Amazon/>

  {/* <Amazon/> */}
  <Final username="aarushi" color="blue"/>
    <Final username="sanu" color="yellow"/>

  <h1>Hello world</h1>
  <Button></Button>
<ProductTab/>
  <Card/>
  </>
  )
}

export default App
