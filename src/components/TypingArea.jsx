import { useEffect, useRef } from "react";

function TypingArea({
  value,
  setValue,
}) {
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();

      const textarea = textareaRef.current;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      const updated =
        value.slice(0, start) +
        "  " +
        value.slice(end);

      setValue(updated);

      requestAnimationFrame(() => {
        textarea.selectionStart = start + 2;
        textarea.selectionEnd = start + 2;
      });
    }
  }

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      spellCheck={false}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      placeholder="Type the code exactly as shown..."
    />
  );
}

export default TypingArea;