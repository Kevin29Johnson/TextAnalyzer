import React from 'react'
import { useState} from 'react'
export default function ModText() {
    const [text,setText]=useState('')
    const [words,setWords]=useState(0)
    const [chars,setChars]=useState(0)
    const [rt,setRT]=useState(0)

    const handleChange = (event) => {
      const newText = event.target.value;
      setText(newText);
      
      if (newText.trim() === '') {
        setWords(0);
        setChars(0);
        setRT(0);
      } else {
        countCharacters();
        countWords();
        readingTime();
      }
    }
    const toUpperCase=()=>{
        setText(text.toUpperCase())
    }
    const toLowerCase=()=>{
        setText(text.toLowerCase())
    }
    const clearText=()=>{
        setText('')
        setWords(0);
        setChars(0);
        setRT(0);
    }
    const clearSpace=()=>{
        setText(text.trim().replace(/\s+/g, ' '))
    }

    const reverseWord=()=>{
        setText(text.split('').reverse().join(''))
    }

    const handleCopy = () => {
        
        navigator.clipboard.writeText(text)
          .then(() => {
            alert('Copied to clipboard!');
          })
          .catch((err) => {
            console.error('Failed to copy: ', err);
          });
      };
    
      const reverseSentence=()=>{
        let wordsArray=text.split(' ')
        let reversedWordsArray = wordsArray.reverse();
        let reversedText = reversedWordsArray.join(' ');
        setText(reversedText)
      }
      const countWords = () => {
        // Remove extra white spaces and split words by spaces
        let wordsArray = text.trim().split(/\s+/);
        // Return the number of words
        setWords(wordsArray.length);
      };
      const readingTime=()=>{
        const rtc = Math.ceil((words * 60) / 275)
        setRT(rtc)
      }
    
      // Function to count characters (excluding spaces)
      const countCharacters = () => {
        // Remove white spaces and count characters
        let charactersCount = text.replace(/\s+/g, '').length;
        // Return the number of characters
        setChars(charactersCount)
      };
  return (
    <>  
    <div className='flex flex-col justify-center items-center mx-auto m-2 '>
    <h1 className='text-center m-1 font-semibold'>Enter Text to analyze</h1>
    <textarea
        value={text}
        onChange={handleChange}
        className="w-10/12 h-32 px-3 py-2 mb-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-gray-800"
        placeholder="Type here..."
      />
    
    <div className="flex space-x-4 m-8">
    <button onClick={toUpperCase} className="px-3 py-2 bg-red-500 text-white rounded-lg">Convert to UpperCase</button>
    <button onClick={toLowerCase} className="px-3 py-2 bg-blue-500 text-white rounded-lg">Convert to LoweCase</button>
    <button onClick={clearText} className="px-3 py-2 bg-blue-500 text-white rounded-lg">Clear All</button>
    <button  onClick={handleCopy} className="px-3 py-2 bg-green-500 text-white rounded-lg">Copy All</button>
    <button onClick={clearSpace} className="px-3 py-2 bg-blue-500 text-white rounded-lg">Clear Space</button>
    <button onClick={reverseWord} className="px-3 py-2 bg-blue-500 text-white rounded-lg">Reverse word</button>
    <button onClick={reverseSentence} className="px-3 py-2 bg-yellow-500 text-white rounded-lg">Reverse sentence</button>
  </div>
  <div className='m-6 font-semibold'>
    <h2>Words Summary</h2>
    <p>{words} words and {chars} characters</p>
    <p>{rt} minutes read</p>
    </div>
     
    </div> 
   
    </>
  )
}
