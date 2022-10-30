import React, { Component } from 'react'
import Compoent from './Compoent'
import html2canvas from 'html2canvas'
export default class Highlighter extends Component {
  constructor(){
    super()
    this.download=React.createRef();
  }

  exportAsImage = async (element, imageFileName) => {
    const canvas = await html2canvas(element);
    const image = canvas.toDataURL("image/png", 1.0);
    this.downloadImage(image, imageFileName);
    }
    
    downloadImage = (blob, fileName) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.style = "display:none;";
    fakeLink.download = fileName;
    fakeLink.href = blob;
    
    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);
    
    fakeLink.remove();
    };
  render() {
    return (
      <div id='code'className='code flex justify-center flex-col items-center m-0 p-0 bg-black py-0'>
        <div className="printable flex justify-center flex-row w-full bg-transparent py-2" ref={this.download}>
        <button className='bg-red-600 font-poppins px-20 py-3 text-2xl rounded-xl text-white hover:bg-pink-600' onClick={()=>{this.exportAsImage(document.getElementById('Printable'),"text")}}>Download</button>
        </div>
        <Compoent/>
      </div>
    )
  }
}
