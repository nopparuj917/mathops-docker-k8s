import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import prime from './assets/prime.svg'
import palindrome from './assets/palindrome.svg'
import wonderful_num from './assets/wonderful_num.svg'
import rottery_image from './assets/rottery.svg'

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)
  const [isPalindrome, setIsPalindrome] = useState(false)
  const [isPrime, setIsPrime] = useState(false)
  // const [isFisrtTime, setIsFirstTime] = useState(true)
  const [rottery, setRottery] = useState(0)

  useEffect(() => {
    console.log("num1: ", num1)
    console.log("result: ", result)
    // fetchCacheResult()
  }, [rottery])

  useEffect(() => {
    setNum1(num1)
  }, [num1])
  async function fetchResult(num1: number, num2: number, operation: string) {
    await fetch(`http://192.168.0.107:31749/calculate?num1=${num1}&num2=${num2}&operation=${operation}`)
      .then((res) => res.json())
      .then((data) => {
        setResult(data.result)
        setIsPalindrome(data.display_image.is_palindome)
        setIsPrime(data.display_image.is_prime)
      })
    // console.log(result)
    getRotteryNumber()
    // setIsFirstTime(false)
  }
  async function getRotteryNumber() {
    await fetch(`http://192.168.0.107:31322/cache/rottery`).then((res) => res.json()).then((data) => setRottery(data.result))
  }
  // async function fetchCacheResult() {
  //   await fetch(`http://localhost:8002/cache`).then((res) => res.json()).then((data) => setNum1(data.result))
  // }

  function showImage() {
    if (result == rottery) {
      return (
        <div>
          <h2>OMG!!!!! YOU WON A ROTTERY!!!! WOW!!!! </h2>
          <img src={rottery_image} alt='rottery' />
        </div>
      )
    }
    else if (isPalindrome && isPrime) {
      return (
        <div>
          <h2>WoWWWWW!!! This is a elegance number!!!!</h2>
          <img src={wonderful_num} alt='wonderful_num' />
        </div>
      )
    }
    else if (isPalindrome) {
      return (
        <div>
          <h2>Ohh!!! it's palindrome Number</h2>
          <img src={palindrome} alt='palindrome' />
        </div>
      )
    } else if (isPrime) {
      return (
        <div>
          <h2>Ohh!!! it's Prime Number</h2>
          <img src={prime} alt='prime' />
        </div>
      )
    }
  }

  function showNumberInputForm() {
    // if (isFisrtTime) {
    return (
      <div>
        <input type="number" value={num1} onChange={(e) => { setNum1(+e.target.value) }} />
        <input type="number" value={num2} onChange={(e) => setNum2(+e.target.value)} />
      </div>
    )
    // } else {
    //   return (
    //     <div>
    //       <input type="number" disabled value={num1} />
    //       <input type="number" onChange={(e) => setNum2(+e.target.value)} value={num2} />
    //     </div>
    //   )
    // }
  }
  return (
    <>
      {showNumberInputForm()}
      <div>
        <button onClick={() => fetchResult(num1, num2, "add")}>Add</button>
        <button onClick={() => fetchResult(num1, num2, "subtract")}>Subtract</button>
        <button onClick={() => fetchResult(num1, num2, "multiply")}>Multiply</button>
        <button onClick={() => fetchResult(num1, num2, "divide")}>Divide</button>
      </div>
      <div>
        <button onClick={() => { }}>Continue</button>
        <button onClick={() => {
          // setIsFirstTime(true)
          setNum1(0)
          setNum2(0)
          setResult(0)
          setIsPalindrome(false)
          setIsPrime(false)
        }}>Clear</button>
      </div>
      <div>
        <h1>Result: {result}</h1>
        <div>
          {showImage()}
        </div>
        <h1>Rottery Number: {rottery}</h1>
      </div>
    </>
  )
}

export default App
