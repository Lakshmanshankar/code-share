import React, { Component } from 'react'
import Compoent from './Compoent'
import html2canvas from 'html2canvas'
export default class Highlighter extends Component {
  async handleDownload(e){
  const idV=document.getElementById('Printable')
   var response=await html2canvas(idV);
   document.body.append(response)
  }
  render() {
    return (
      <div>
            <button className=' w-32 h-10 bg-amber-300' onClick={this.handleDownload}>Download</button>
        <div className="printable" id='Printable'>
        <Compoent/>
        </div>
      </div>
    )
  }
}
