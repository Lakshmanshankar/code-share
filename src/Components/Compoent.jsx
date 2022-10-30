import SyntaxHighlighter from 'react-syntax-highlighter';
import Select from 'react-select'
import { useState,useEffect } from 'react';
// import { nnfxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import { irBlack } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { monokaiSublime } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
// import monokaiSublime from 'react-syntax-highlighter/dist/cjs/styles/hljs/monokai-sublime';
  const Options=[]

  const Component = () => {
  var [lang,setLang]=useState('python')
  var [codeString,setCodeString]=useState('def fun(): retun None')

  SyntaxHighlighter.supportedLanguages.forEach((x)=>{
  Options.push({value:x,label:x})
  })
  useEffect(() => {
  setLang(lang)
  }, [lang])
  
  var setLanguage=(e)=>{
    setLang(e.value)
  }
  var handleValueOnInput=()=>{
    var dom=document.getElementById("codeEngine").value
    setCodeString(dom)
  }
  var setBackgroud=(e)=>{
    document.getElementById('holderMain').style.background=e.target.value;
  }
  return (
    <>
    <div className='w-full h-auto bg-slate-600'>
    <h1>Hello component</h1>
    <div className="holder w-full flex justify-center flex-col items-center h-fit sm:flex-row">
    <input type="color" name="colorpalte" id="color" className='w-10/12 sm:w-32 border-teal-300 borderless' placeholder='Color' onChange={setBackgroud}/>
    <Select options={Options} defaultValue={lang} onChange={setLanguage} className='aurora sm:w-2/5 ml w-10/12 mt-2'></Select>
    </div>
    <div className="textArea flex justify-center m-3">
      <textarea name="codeContainer" id="codeEngine" cols="30" rows="10" className='bg-pink-700 sm:w-2/6 w-full' onChangeCapture={handleValueOnInput}></textarea>
    </div>
    </div>
    <div className="" id='Printable'>
    <div className="printable w-full flex justify-center items-center flex-col py-16" id='holderMain'>
    <div className="headerPro h-7 bg-white"></div>
    <SyntaxHighlighter language={lang} style={monokaiSublime} showLineNumbers={true} wrapLongLines={true} className="Program">
    {codeString}
    </SyntaxHighlighter>
    </div>
    </div>
    </>
  );
};
export default Component;

//Reference links
//https://react-syntax-highlighter.github.io/react-syntax-highlighter/AVAILABLE_STYLES_HLJS.html#available-stylesheet-props



/**
 * 
 * 
 *   const codeString = `import react from react \nexport default function App(){\n 
    return
    <>
    hello world from react
    <>
    }\n`

    const pycode=`def fooo():
        return None
    class A:
        def __nint__(self):
            pass
`

    const dockerfile=`
    RUN ubuntu:latest
    WORKDIR . .
    CMD ['echo','hello']
    

       <SyntaxHighlighter language="python" style={monokaiSublime} showLineNumbers={true} wrapLines={true}>
      {pycode}
    </SyntaxHighlighter>
    <SyntaxHighlighter language='javascript' style={irBlack} showLineNumbers={true} wrapLongLines={true}>
    {codeString}
    </SyntaxHighlighter>

    <SyntaxHighlighter language='dockerfile' style={irBlack} showLineNumbers={true} wrapLongLines={true}>
    {dockerfile}
    </SyntaxHighlighter>
    `
 */