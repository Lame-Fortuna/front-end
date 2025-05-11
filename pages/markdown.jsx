import React, { useState, useEffect } from 'react'
import { marked } from 'marked'
import { ToastContainer, toast } from "react-toastify";
import '../public/markdown.css'

const initialText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
    }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
- Some are bulleted.
    - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`

const InitialMarkdownText = marked.parse(initialText, { breaks: true })

const Markdown = () =>{
    // Tab title
    useEffect(() => {
        document.title = "Markdown Compiler";
    }, []);

    const [text, setText] = useState(initialText)
    const [compiled, setCompiled] = useState(marked.parse(initialText, { breaks: true }))

    function compile(e) {
        const value = e.target.value
        setText(value)
        toast.success('Compiled Successfully', {autoClose: 1000})
        setCompiled(marked.parse(value, { breaks: true }))
    }

    return(

    <div className="box">
        <ToastContainer />
        <div className="code">
            <textarea id="editor" onChange={compile} value={text}></textarea>
        </div>
        <div className="preview">
            <p id="preview" dangerouslySetInnerHTML={{ __html: compiled }}></p>
        </div>
    </div>

    )
}

export default Markdown