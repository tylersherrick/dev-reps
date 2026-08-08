import { useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";

function TypingArea({
  value,
  setValue,
  disabled,
  onPause,
}) {
  const editorRef = useRef(null);

  function handleMount(editor, monaco) {
    editorRef.current = editor;

    if (!disabled) {
      editor.focus();
    }

    editor.addCommand(
      monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
      () => {
        onPause?.();
      }
    );
  }

  useEffect(() => {
    if (!disabled) {
      editorRef.current?.focus();
    }
  }, [disabled]);

  return (
    <Editor
      width="100%"
      height={window.innerWidth <= 1060 ? "360px" : "480px"}
      defaultLanguage="javascript"
      theme="vs-dark"
      value={value}
      onChange={(value) => setValue(value ?? "")}
      onMount={handleMount}
      options={{
        minimap: {
          enabled: false,
        },
        lineNumbers: "off",
        glyphMargin: false,
        folding: false,
        scrollBeyondLastLine: false,
        wordWrap: "on",
        automaticLayout: true,
        tabSize: 2,
        insertSpaces: true,
        fontSize: 15,
        fontFamily: "Fira Code, monospace",
        padding: {
          top: 16,
          bottom: 16,
        },
        readOnly: disabled,
        quickSuggestions: false,
        suggestOnTriggerCharacters: false,
        parameterHints: {
          enabled: false,
        },
        hover: {
          enabled: false,
        },
        contextmenu: false,
      }}
    />
  );
}

export default TypingArea;