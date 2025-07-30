import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <h1 className='text-3xl bg-green-700 p-3 rounded-md'>Vite with tailwind</h1>
      <Card name = "Pink Floyd" person = "Nick Mason"/>
      <Card name = "Rock Band" person = "David Gilmour"/>
      <Card name = "Stoners" person = "Roger Waters"/>
    </>
  )
}

export default App
