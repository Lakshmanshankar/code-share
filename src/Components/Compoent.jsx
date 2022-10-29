import SyntaxHighlighter from 'react-syntax-highlighter';
// import { nnfxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { irBlack } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import monokaiSublime from 'react-syntax-highlighter/dist/cjs/styles/hljs/monokai-sublime';
const Component = () => {
  const codeString = `import react from react \nexport default function App(){\n 
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
    
    `
  return (
    <>
    <SyntaxHighlighter language="python" style={monokaiSublime} showLineNumbers={true} wrapLines={true}>
      {pycode}
    </SyntaxHighlighter>
    <SyntaxHighlighter language='javascript' style={irBlack} showLineNumbers={true} wrapLongLines={true}>
    {codeString}
    </SyntaxHighlighter>

    <SyntaxHighlighter language='dockerfile' style={irBlack} showLineNumbers={true} wrapLongLines={true}>
    {dockerfile}
    </SyntaxHighlighter>
    </>
 

  );
};
export default Component;

//Reference links
//https://react-syntax-highlighter.github.io/react-syntax-highlighter/AVAILABLE_STYLES_HLJS.html#available-stylesheet-props