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
      <div id='code' className='code'>
        <div className="printable" ref={this.download}>
        <Compoent/>
        </div>
        <button className=' w-32 h-10 bg-amber-300' onClick={()=>{this.exportAsImage(document.getElementById('Printable'),"text")}}>Download</button>
      </div>
    )
  }
}
