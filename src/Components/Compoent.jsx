import SyntaxHighlighter from 'react-syntax-highlighter';
import Select from 'react-select'
import { useState,useEffect,useRef } from 'react';
// import { nnfxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import { irBlack } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { monokaiSublime } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

  const Options=[]

  const Component = () => {
  var cinnamon=useRef()
  var [lang,setLang]=useState('python')
  // var [icons,seticons]=useState(cinnamon.current)
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
    <div className='w-full h-auto bg-black'>
    <div className="holder w-full flex justify-center flex-col items-center h-fit sm:flex-row">
    <input type="color" name="colorpalte" id="color" className='w-10/12 sm:w-32 border-teal-300 borderless sm:h-9 mt-1' placeholder='Color' onChange={setBackgroud}/>
    <Select options={Options} defaultValue={lang} onChange={setLanguage} className='aurora sm:w-2/5 ml w-10/12 mt-2 '></Select>
    </div>
    <div className="textArea flex justify-center m-3 bg-black">
      <textarea name="codeContainer" id="codeEngine" cols="25" rows="10" className='sm:w-3/6 w-11/12 textArea font-poppins bg-zinc-700 sm:text-xl rounded-md text-white text-lg' onChangeCapture={handleValueOnInput} placeholder="Enter your code and download it as image"></textarea>
    </div>
    </div>
    <div className=" flex justify-center">
      <div className="printable bg-black py-5" id='Printable'>
     <div className="printable bg-black flex flex-col sm:py-16 sm:px-32 px-10 py-10 rounded-md" id='holderMain'>
     <div className="headerPro h-7 min-w-min bg-black justify-between topround">
      <div className="dummyleft float-left">
      <div className="hldCont w-16 bg-transparent flex justify-between py-1">
      <div className="contianers-1 w-4 h-4 rounded-full bg-red-500 "></div>
      <div className="contianers-2 w-4 h-4 rounded-full bg-amber-500"></div>
      <div className="contianers-3 w-4 h-4 rounded-full bg-green-600"></div>
      </div>
      </div>
      <div className="dummyroght"></div>
    </div>
    <SyntaxHighlighter language={lang} style={monokaiSublime} showLineNumbers={true} wrapLongLines={true} className="Program" ref={cinnamon}>
    {codeString}
    </SyntaxHighlighter>
    </div>
    </div>
    </div>
    </>
  );
};
export default Component;

//Reference links
//https://react-syntax-highlighter.github.io/react-syntax-highlighter/AVAILABLE_STYLES_HLJS.html#available-stylesheet-props
