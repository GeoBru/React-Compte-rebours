import { useEffect, useState } from "react"
import { Input } from "./Input"

function App() {
  const [timeWanted, setTimeWanted] = useState(5)
  const [secondsLeft, setSecondsLeft] = useState(timeWanted)

  const handleChange = (v) => {
    setTimeWanted(v)
    setSecondsLeft(v)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft(v => {
        if (v <= 1) {
          clearInterval(timer)
          return 0
        }
        return v - 1

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
