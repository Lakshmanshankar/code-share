import React, { Component } from 'react'
import "../Assets/css/menu.css"

export default class Menu extends Component {
    constructor(){
        super()
        this.lineOne=React.createRef();
        this.lineThree=React.createRef();
        this.state={
            isVisbile:false
        }
    }
    handleClick(){
        var One=this.lineOne.current;
        var Two=this.lineThree.current;
        var slider=document.getElementById('sliderIn')
        if (!this.state.isVisbile) {
            One.classList.add("line01-anim")
            Two.classList.add("line03-anim")
            slider.classList.remove('slideOut')
            slider.classList.add('slideIn')
            this.setState({isVisbile:true})
        } else {
            slider.classList.add('slideOut')
            One.classList.remove("line01-anim")
            Two.classList.remove("line03-anim")
            this.setState({isVisbile:false})
        }
    }
  render() {
    return (
      <div>
        <button className="container h-7" onClick={this.handleClick.bind(this)}>
            <div className="line line01" ref={this.lineOne}></div>
            <div className="line line03" ref={this.lineThree}></div>
        </button>
      </div>
    )
  }
}
