import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs'
export default function Main() {
    const python=`
   def callAll(a):
      print("Your code will appear here")
    callAll(a)
    `
  return (
    <div>
      <main className="w-full py-10 bg-slate-50 flex justify-center items-center">
        <section className=' w-4/5 py-5 bg-gradient-to-r from-pink-100 to-emerald-100 text-2xl px-2 rounded-lg sm:h-4/6'>
            <div className=" w-8/12">
            <div className="header text-4xl text-red-600 font-extrabold py-5">Code and Share</div>
            <div className=" font-poppins py-5 sm:w-4/5">
               Code share is a web application where you can share your code as beautifull images
            </div>
            <div className="plate py-5">
                <button className='px-5 bg-red-600 font-poppins ml-10 py-2 rounded-md hover:transition-all hover:bg-pink-600 hover:text-slate-50'>Source</button>
            </div>
            </div>
            <div className="hidden sm:flex sm:float-right sm:w-8/12 sm:ml-72 ">
            <SyntaxHighlighter language='python' style={irBlack} showLineNumbers={true} wrapLongLines={true} className="rounded-xl">
            {python}
            </SyntaxHighlighter>
            </div>
        </section>
      </main>
    </div>
  )
}
