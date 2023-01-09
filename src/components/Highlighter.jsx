import React, { Component } from "react";
import Select from "react-select";
import html2canvas from "html2canvas";
import SyntaxHighlighter from "react-syntax-highlighter";
// eslint-disable-next-line
import { nnfxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
// eslint-disable-next-line
import { irBlack } from "react-syntax-highlighter/dist/cjs/styles/hljs";
// eslint-disable-next-line
import { monokaiSublime } from "react-syntax-highlighter/dist/cjs/styles/hljs";
// eslint-disable-next-line
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
//  eslint-disable-next-line
import { xcode } from "react-syntax-highlighter/dist/cjs/styles/hljs";
//  eslint-disable-next-line
import { androidstudio } from "react-syntax-highlighter/dist/cjs/styles/hljs";
//  eslint-disable-next-line
import github from "react-syntax-highlighter/dist/cjs/styles/hljs/github";
//  eslint-disable-next-line
import githubGist from "react-syntax-highlighter/dist/cjs/styles/hljs/github-gist";
//  eslint-disable-next-line
import gradientDark from "react-syntax-highlighter/dist/cjs/styles/hljs/gradient-dark";
//  eslint-disable-next-line
import monokai from "react-syntax-highlighter/dist/cjs/styles/hljs/monokai";
//  eslint-disable-next-line
import gradientLight from "react-syntax-highlighter/dist/cjs/styles/hljs/gradient-light";
//  eslint-disable-next-line
import purebasic from "react-syntax-highlighter/dist/cjs/styles/hljs/purebasic";
//  eslint-disable-next-line
import schoolBook from "react-syntax-highlighter/dist/cjs/styles/hljs/school-book";
//  eslint-disable-next-line
import solarizedDark from "react-syntax-highlighter/dist/cjs/styles/hljs/solarized-dark";


const themes = [
  { value: monokaiSublime, label: "monokaiSublime" },
  { value: irBlack, label: "irBlack" },
  { value: nnfxDark, label: "nnfxDark" },
  { value: atomOneDark, label: "atomOneDark" },
  { value: xcode, label: "xcode" },
  { value: androidstudio, label: "andriodStudio" },
  { value: github, label: "github" },
  { value: githubGist, label: "GithubGist" },
  { value: gradientDark, label: "gradientDark" },
  { value: gradientLight, label: "gradientLight" },
  { value: monokai, label: "monokai" },
  { value: purebasic, label: "purebasic" },
  { value: gradientDark, label: "gradientDark" },
  { value: schoolBook, label: "schoolBook" },
  { value: solarizedDark, label: "solarizedDark" },
  { value: gradientDark, label: "gradientDark" },
  { value: schoolBook, label: "schoolBook" },
];

const colors = [
  { value: "Python", label: "Python" },
  { value: "Javascript", label: "javascript" },
  { value: "yaml", label: "yaml" },
  { value: "bash", label: "bash" },
  { value: "c", label: "c" },
  { value: "cpp", label: "c++" },
  { value: "docker", label: "docker" },
  { value: "css", label: "css" },
  { value: "csharp", label: "c#" },
  { value: "dart", label: "dart" },
  { value: "kotlin", label: "kotlin" },
  { value: "objectivec", label: "objectivec" },
  { value: "perl", label: "perl" },
  { value: "php", label: "php" },
  { value: "powershell", label: "powershell" },
  { value: "ruby", label: "ruby" },
  { value: "r", label: "r" },
  { value: "rust", label: "rust" },
  { value: "scala", label: "scala" },
  { value: "sql", label: "sql" },
  { value: "swift", label: "swift" },
  { value: "typescript", label: "typescript" },
  { value: "vala", label: "vala" },
  { value: "x86asm", label: "x86asm" },
  { value: "xml", label: "xml" },
  { value: "rust", label: "rust" },
  { value: "htmlbars", label: "htmlbars" },
];

export default class Highlighter extends Component {
  constructor() {
    super();
    this.state = {
      code: "code-share",
      theme: monokaiSublime,
      lineNumbers: false,
      language: "css",
      codeString: `.slideOut{
        transition: 0.4s;
        opacity: 0;
        animation: slideOut 1.25s ease;
    }
    @keyframes slideIn {
        0%{
            opacity: 0;
            transform: translateY(0%);
        }
    }
    @keyframes slideOut {
        0%{
            opacity: 1;
        }
    }
    
      `,
      backGround: "#fff",
    };
  }

  componentDidMount() {
    var dom = document.getElementById("code-share");
    setTimeout(() => {
      dom.classList.add("slideDown");
      this.setState({ code: "is Now" });
    }, 2000);

    setTimeout(() => {
      dom.classList.remove("slideDown");
      dom.classList.add("slideIn");
      this.setState({ code: "Blue Print" });
    }, 3000);
  }
  setThemes(x) {
    this.setState({ theme: x.value });
  }
  handleLineNum(x) {
    this.setState({ lineNumbers: x.target.checked });
    console.log(this.state);
  }
  setCodeString(x) {
    this.setState({ codeString: x.target.value });
  }
  setLanguage(x) {
    this.setState({ language: x.value });
  }
  setColor(x) {
    this.setState({ colors: x.target.value });
    document.getElementById("OwnColor").style.background = toString(
      x.target.value
    );
  }
  setBackgroud = (e) => {
    document.getElementById("OwnColor").style.background = e.target.value;
  };

  // Image Export
  exportAsImage = async (element, imageFileName) => {
    const canvas = await html2canvas(element);
    const image = canvas.toDataURL("image/png", 1.0);
    this.downloadImage(image, imageFileName);
  };

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
      <>
        <div>
          <div
            className=" hideMe sm:text-5xl text-2xl font-josefins py-5 font-extrabold flex justify-center mt-5"
            id="code-share"
          >
            {this.state.code}
          </div>
          <p className=" font-poppins text-stone-50 sm:text-xl text-sm flex justify-center px-7">
            Blue Print allow you to create beautiful Images of your code that
            you can share with your friends
          </p>
          <div className=" w-full py-6 border-gray-50 rounded-xl flex justify-center">
            <div className=" w-5/6 py-20 bg-slate-50 mt-10 rounded-xl gradientShadow">
              <div className="w-full h-full border-red-500 rounded-xl bg-black">
                <div className="container-plate w-full px-5 py-2 flex justify-around border-b-orange-500">
                  <div className="themes w-1/6 mt-2">
                    <Select
                      onChange={this.setThemes.bind(this)}
                      options={themes}
                      id="styledProp"
                      theme={(theme) => ({
                        ...theme,
                        borderRadius: "4px",
                        background: "black",

                        colors: {
                          ...theme.colors,
                          text: "orangered",
                          primary25: "rgba(244,23,55,0.4)",
                          primary: "rgba(244,123,233,0.5)",
                        },
                      })}
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderColor: state.isFocused
                            ? "red"
                            : "rgba(124,224,123,0.93)",
                          background: "black",
                          borderRadius: "6px",
                          color: "#fff",
                        }),
                      }}
                    />
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="lineNumber"
                      id="lineNumber"
                      onChange={this.handleLineNum.bind(this)}
                      className="isChecked mt-3"
                    />
                    <label
                      htmlFor="lineNumber"
                      className="font-poppins text-teal-300 px-2 font-bold"
                    >
                      LineNumber
                    </label>
                  </div>
                  <div className="colors w-1/6 mt-2">
                    <Select
                      onChange={this.setLanguage.bind(this)}
                      options={colors}
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderColor: state.isFocused
                            ? "red"
                            : "rgba(124,224,123,0.93)",
                          background: "black",
                          borderRadius: "6px",
                        }),
                      }}
                    />
                  </div>
                  <div className="flex font-poppins text-gray-50">
                    <label
                      htmlFor="backgroundColor"
                      className="font-poppins text-lg mt-4 text-green-400"
                    >
                      Background
                    </label>
                    <input
                      type="color"
                      name="backgroundColor"
                      id="bg-color"
                      className="sm:w-32 ownBorder sm:h-10 ml-2 mt-2  border-0"
                      onChange={this.setBackgroud}
                      defaultValue="#fff"
                    />
                  </div>
                  <div className="last">
                    <button
                      className=" bg-green-500 font-poppins text-lg rounded-lg px-8 py-3 border-0"
                      onClick={() => {
                        this.exportAsImage(
                          document.getElementById("OwnColor"),
                          "text"
                        );
                      }}
                    >
                      Download
                    </button>
                  </div>
                </div>

                {/* Text Area Here */}
                <div className="inputArea">
                  <textarea
                    name="code-share"
                    id="codeString"
                    cols="30"
                    rows="10"
                    className="ml-10 mr-10 px-5 py-5 w-5/6 bg-slate-800 rounded-xl font-poppins transition-all sm:ml-32 text-gray-50"
                    onInput={this.setCodeString.bind(this)}
                    placeholder="Type Your code "
                  ></textarea>
                </div>

                <div className="basewrapper full flex justify-center px-10 py-20 ">
                  <div
                    className="highlighter w-max flex px-32 py-10  bg-black"
                    id="OwnColor"
                  >
                    <span className="wrapperOne w-full flex ">
                      {/* <div className="hldCont w-16 bg-transparent flex justify-between py-1"> */}
                      <div className="contianers-1 w-5 h-5 ml-2 rounded-full bg-red-500 "></div>
                      <div className="contianers-2 w-5 h-5 ml-2 rounded-full bg-amber-500"></div>
                      <div className="contianers-3 w-5 h-5 ml-2 rounded-full bg-green-600"></div>
                    </span>
                    <SyntaxHighlighter
                      language={this.state.language}
                      style={this.state.theme}
                      showLineNumbers={this.state.lineNumbers}
                      wrapLongLines={true}
                      className="Program py-6 rounded-xl"
                      customStyle={{
                        backgroundColor: "rgba(0,0,0,0.4)",
                        opacity: "1",
                        marginTop: "1rem",
                        padding: "3rem",
                      }}
                    >
                      {this.state.codeString}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
