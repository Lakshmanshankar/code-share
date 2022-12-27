import React, { Component } from 'react'

export default class Highlighter extends Component {
  constructor(){
    super()
    this.state={
      code:'code-share'
    }
  }

  componentDidMount(){
    var dom=document.getElementById("code-share")
    setTimeout(() => {
      dom.classList.add("slideDown")
      this.setState({code:'is Now'})
    }, 2000);

    setTimeout(() => {
      dom.classList.remove("slideDown")
      dom.classList.add("slideIn");
      this.setState({code:'Blue Print'})
    }, 3000);
  }
  render() {
    return (
      <>
       <div>
        <div className=" hideMe sm:text-5xl text-2xl font-josefins py-5 font-extrabold flex justify-center mt-5" id='code-share'>{this.state.code}</div>
         <p className=' font-poppins text-stone-50 sm:text-xl text-sm flex justify-center px-7'>Blue Print allow you to create beautiful Images of your code that you can share with your friends</p>

         <div className=" w-full h-screen border-gray-50 rounded-xl flex justify-center">
          
          <div className=" w-5/6  h-4/5 bg-slate-50 mt-10 rounded-xl gradientShadow">
            <div className='w-full h-full border-red-500 rounded-xl bg-black'>
              <div className="container-plate w-full py-2">
                
              </div>
            </div>
          </div>
         </div>
      </div>
      </>
    )
  }
}



// import React from 'react'
// import { useState,useRef,useEffect } from 'react2xl'
// export default function Highlighter() {
//   var [codeshare,setShare]=useState('code-share')
//   window.onload()
//   return (
   
//   )
// }
