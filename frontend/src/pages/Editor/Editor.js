import React from 'react';
import './Editor.css'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/ext-language_tools"
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

class Editor extends React.Component {

    state = {
        language: 'python'
    }

    test() {
        console.log("testing")
    }

    render() {
        const { language } = this.state;
        return <div id="editor">
            {/* TODO: make languages dynamically generated */}
            <select>
                <option>Python 3</option>
                <option>C</option>
            </select>
            <AceEditor
                placeholder="Enter some text here to code!"
                mode={language}
                theme="monokai"
                fontSize={14}
                setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: true,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 4,
                }}/>
            <button onClick={this.test.bind(this)}>Test</button>
        </div>
    }
}

export default Editor;