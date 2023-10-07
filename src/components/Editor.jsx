import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/mdn-like.css';
import 'codemirror/theme/the-matrix.css';
import 'codemirror/theme/night.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
// import pyodide from 'pyodide';
import { Controlled as ControlledEditorComponent } from 'react-codemirror2';


const Editor = ({ language, value, setEditorState }) => {
    const [theme, setTheme] = useState("dracula")

    const handleChange = (editor, data, value) => {
        setEditorState(value);
        // console.log(value); // To test it
    }

    // const executePythonCode = async (code) => {
    //     try {
    //         const result = await pyodide.runPythonAsync(code);
    //         // Handle the result as needed (e.g., display it in the console or update the state).
    //         console.log(result);
    //       } catch (error) {
    //         // Handle any errors that occur during Python execution.
    //         console.error(error);
    //       }
    // };

    const themeArray = ['dracula', 'material', 'mdn-like', 'the-matrix', 'night']

    return (
        <div className="editor-container">
            <div style={{marginBottom: "10px"}}>
                <label for="cars">Choose a theme: </label>
                <select name="theme" onChange={(el) => {
                    setTheme(el.target.value)
                }}>
                    {
                        themeArray.map(theme => (
                            <option value={theme}>{theme}</option>
                        ))
                    }
                </select>
            </div>
            <ControlledEditorComponent
                onBeforeChange={handleChange}
                value     = {value}
                className = "code-mirror-wrapper"
                options   = {{
                    lineWrapping:      true,
                    lint:              true,
                    mode:          language,
                    lineNumbers:       true,

                    theme:            theme,

                    autoCloseTags:     true,
                    autoCloseBrackets: true,
                }}
            />
            {/* <button1
                onClick={() => {
                    executePythonCode(value);
                }}
            >
                Execute Python
            </button1> */}
        </div>
  )
}
export default Editor
