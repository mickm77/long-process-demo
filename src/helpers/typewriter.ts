


const insertTextAtCursor = (element, text) => {
    element.focus();
    const startPos = element.selectionStart;
    const endPos = element.selectionEnd;
    element.value =
      element.value.substring(0, startPos) +
      text +
      element.value.substring(endPos, element.value.length);
    element.selectionStart = element.selectionEnd = startPos + text.length;
  }


  export const typeWriter = async (id, str) => {
    const element = document.getElementById(id);
    element.focus();
    await new Promise((resolve) => {
      const delay = 150;
      let pos = 0;
      const addText = () => {
        const char = str.charAt(pos);
        insertTextAtCursor(element, char);
        pos++;
        if (pos < str.length) {
          setTimeout(addText, delay);
        } else {
          resolve(1);
        }
      }
      addText();
    });
  }

  export const buttonPress = (id, delay, start, end) => {
    const element = document.getElementById(id);
    element.focus();
    setTimeout(() => {
      start();
      setTimeout(() => {
        end();
      }, delay);
    }, 700);
  }