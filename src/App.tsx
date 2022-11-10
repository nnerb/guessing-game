import { useEffect, useState } from 'react'
import './App.css'
import Footer from './Footer'

/* Component */
import Header from './Header'

function App() {

  const [color, setColor] = useState("")
  const [answers, setAnswers] = useState<string[]>([])
  const [result, setResult] = useState<Result | undefined>(undefined)

  const generateColor = () => {
    const actualColor = getRandomColor()
    setColor(actualColor)
    setAnswers([actualColor, getRandomColor(), getRandomColor()].sort(() => 0.5 - Math.random()))
  }
  const getRandomColor = () => {
    const color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0').toLocaleUpperCase()
    return color
  }

  enum Result {
    Correct,
    Wrong
  }
 
  useEffect(() => {
    //TODO: generate a random color here
   generateColor()
  },[])

  const styles = {
    background: color
  }

  const handleAnswerClicked = (answer: string) => {
    if(answer === color) {
      //TODO: guessed correct answer 
      setResult(Result.Correct)
      //TODO: reselect colors
      generateColor()
    }
    else{
      //TODO: guess incorrect answer
      setResult(Result.Wrong)
    }
  }

  return (
    <div className="App relative min-h-screen pb-[10rem] sm:pb-[8rem] bg-gray-100">
      <Header/>
      <div className='mx-auto max-w-[365px] mt-[-155px]'>
      <div className='flex flex-col items-center mx-2 relative'>
        <h1 className='title text-[1.50rem] mb-4 font-bold text-center text-white'>Guess the Color (<a href='https://marketing.istockphoto.com/blog/hex-colors-guide/' rel='noopener' target="_blank" className='link hover:underline hover:text-blue-500 decoration-blue-500'>HEX</a> Edition)</h1>
        <div className='h-[200px] mb-8 w-full' style={styles}></div>
        <div className='flex gap-5 mb-4 w-full flex-col sm:flex-row'>
          {answers.map(answer => (
          <button type='button' key={answer}
          onClick={()=>handleAnswerClicked(answer)}
          className='rounded-lg py-2 px-5 w-full hover:ring-blue-500 text-blue-700 ring-gray-300 ring-1 outline-none hover:bg-gray-100 border-none active:translate-y-[2px] active:bg-gray-100 shadow-initial active:shadow-clicked sm:w-[105px]'
          > {answer} </button>
        ))}
        </div>
        {result === undefined && <div className='text-xl absolute bottom-0 translate-y-[120%] font-bold text-center'> Start guessing and Good luck!❤️ </div>}
        {result === Result.Correct && <div className='text-xl absolute bottom-0 translate-y-[120%] text-green-500 font-bold'>Correct!</div>} 
        {result === Result.Wrong && <div className='text-xl absolute bottom-0 translate-y-[120%] text-red-500 font-bold'>Wrong Answer</div>} 
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
