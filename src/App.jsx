import { useEffect, useState } from "react"
import { Input } from "./Input"

function App() {
  const [timeWanted, setTimeWanted] = useState(5)
  const [secondsLeft, setSecondsLeft] = useState(timeWanted)

  const handleChange = (inputValue) => {
    setTimeWanted(inputValue)
    setSecondsLeft(inputValue)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft(inputValue => {
        if (inputValue <= 1) {
          clearInterval(timer)
          return 0
        }
        return inputValue - 1

      })
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [timeWanted]);


  return (
    <>
      <Input
        value={timeWanted}
        onChange={handleChange}
      />
      <p>Décompte : {secondsLeft}</p>
    </>
  )
}


export default App
