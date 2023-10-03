//import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import React, { useState } from 'react';
import Editor from './components/Editor';

function App() {
  const [openedEditor, setOpenedEditor] = useState('html');

  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  const onTabClick = (editorName) => {
    setOpenedEditor(editorName);
  };

  return (
    <div className="App">
      <p>Welcome to the editor!</p>

      <div className="tab-button-container">
        <Button title="HTML" onClick={() => {
          onTabClick('html')
        }}/>
        <Button title="CSS" onClick={() => {
          onTabClick('css')
        }}/>
        <Button title="JavaScript" onClick={() => {
          onTabClick('js')
        }}/>
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <div className="editor-container">
        {
          openedEditor === 'html' ? (
            //<p>The html editor is open</p>
            <Editor
              language="xml"
              value={html}
              setEditorState={setHtml}
            />
          ) : openedEditor === 'css' ? (
            // <p>The CSS editor is open!!!!!!</p>
            <Editor
              language="css"
              value={css}
              setEditorState={setCss}
            />
          ) : (
            // <p>The JavaScript editor is open</p>
            <Editor
              language="javascript"
              value={js}
              setEditorState={setJs}
            />
          )
        }
      </div>
      
    </div>
  );
}

export default App;
