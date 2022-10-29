import React, { Component } from 'react'
import Prism from './prism'
import "../Assets/css/prism.css"
export default class Highlighter extends Component {
    componentDidMount(){
        Prism.highlightAll();
        console.log(Prism)
    }
  render() {
    return (
      <div>
        <pre>
            <code className='language-javascript'>
                {`
                import React from 'react'
                function App() {
                    return (
                      <div className="App">
                        Hello World from React
                      </div>
                    );
                  }
                  
                  export default App;
                
                `}
            </code>
        </pre>
      </div>
    )
  }
}
