import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import monokaiSublime from 'react-syntax-highlighter/dist/cjs/styles/hljs/monokai-sublime';
export default function Main() {
    const python=`#python 3.10

  def codeShare():
    print("Your code will appear here")
  codeShare()
  `
  return (
    <div>
      <main className="w-full py-10 bg-slate-50 flex justify-center items-center">
        <section className=' w-10/12 py-5 bg-neutral-900 text-2xl px-2 rounded-lg sm:h-5/6 sm:py-32 shadow-md'>
            <div className="sm:w-11/12">
            <div className="header text-4xl text-red-600 font-extrabold py-5 gradientV sm:text-8xl sm:ml-10">Code and Share</div>
            <div className=" font-poppins py-5 w-full sm:w-3/5 text-zinc-50 sm:py-5 sm:px-10 text-lg sm:text-2xl px-5">
               Code share is a web application where you can share your code as beautifull images
               <br></br>
               <br></br>
               Code share supports modern programming languages
            </div>
            <div className="plate py-5">
                <button className='px-10 w-56 bg-red-600 font-poppins ml-5 sm:ml-10 py-2 rounded-md hover:transition-all hover:bg-pink-600 hover:text-slate-50'>Source</button>
            </div>
            </div>
            <div className="hidden sm:flex sm:float-right sm:ml-72 makeabsolute">
            <SyntaxHighlighter language='python' style={monokaiSublime} showLineNumbers={false} wrapLongLines={true} className="rounded-xl">
            {python}
            </SyntaxHighlighter>
            </div>
        </section>
      </main>
    </div>
  )
}
