import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

const initial = `
# Pariya's React Markdown Previewer!
Before we start, check out [my personal website](https://www.freecodecamp.org)!

## This page is project no.2 for the frontend course
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

### And here's the required stuff to pass the test

I'm just gonna go with the default code from the freeCodeCamp website for this one :)

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`' {
    return multiLineCode;
  }
}
\`\`\`

> Block Quotes - **bold** - _italic_ - **_bold and italic_** - ~~crossed out~~ 

- lists
  - bulleted

1. numbered lists
`;


const background = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '20px'
};
const container = (num) => ({
  height: num? 'fitContent': '20rem',
  width: num? '60%': '40%',
  fontSize: '1rem',
  backgroundColor: 'rgb(14, 26, 26)',
  color: 'rgb(187, 192, 192)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  margin: '20px',
  border: '1px solid rgba(29, 29, 29, 0.85)'
});
const text = (num) =>({
  height: '98%',
  width: '98%',
  margin: '1%',
  color: 'rgb(7, 7, 7)',
  fontSize: num? '1.5rem': '1.2rem',
  backgroundColor: 'rgba(208, 219, 219, 0.64)',
});
const header = {
  height: '2%'
}

function App() {
  const [markdown, setMarkdown] = useState(initial);
  return (
    <div style={background}>
      <div style={container(0)}>
        <h2 style={header}>Editor</h2>
        <textarea 
          id="editor" 
          style={text(0)} 
          value={markdown}
          onChange={(userIn) => setMarkdown(userIn.target.value)}
        />
      </div>
      <div style={container(1)}>
        <h2 style={header}>Previewer</h2>
        <div id="preview" style={text(1)} dangerouslySetInnerHTML={{ __html: marked(markdown, { breaks: true })}}></div>
      </div>
    </div>
  );
}

export default App;
