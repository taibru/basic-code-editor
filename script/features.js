/*implement the features like running HTMLcode css code and javascript code.*/

let isLocked = false;

//run the codes written in the left side textareas
function runCode(){
  const htmlCode = document.getElementById('html-code').value;
  const cssCode = document.getElementById('css-code').value;
  const jsCode = document.getElementById('js-code').value;

  const output = document.getElementById('output');

  output.contentDocument.body.innerHTML = htmlCode+ "<style>"+cssCode+"</style>";
  try{
    output.contentWindow.eval(jsCode);
  }catch(error){
    console.log(error);
  }
  
}

//copy code written in anywhere on the page
function copyCode(event){
  const codeTextArea = document.getElementById('html-code');
  codeTextArea.ariaMultiSelectable;
  document.execCommand('copy');
}

//save the code to the localStorage which later on can be saved anywhere we want. 
function saveCode(){
  const htmlCode = document.getElementById('html-code').value;
  const cssCode = document.getElementById('css-code').value;
  const jsCode = document.getElementById('js-code').value;
  localStorage.setItem('htmlCode', htmlCode);
  localStorage.setItem('cssCode', cssCode);
  localStorage.setItem('jsCode', jsCode);
}

//look for previous code saved eariler using above method
function previouslySavedCode(){
  let htmlCode = document.getElementById('html-code');
  let cssCode = document.getElementById('css-code');
  let jsCode = document.getElementById('js-code');
  htmlCode.value = localStorage.getItem('htmlCode');
  cssCode.value = localStorage.getItem('cssCode');
  jsCode.value = localStorage.getItem('jsCode')
}

//lock the textareas to prevent them editable and unlock to make them editable
function toggleLock(){
  isLocked = !isLocked;
  const htmlCodeTextArea = document.getElementById('html-code');
  htmlCodeTextArea.readOnly = isLocked;
  const cssCodeTextArea = document.getElementById('css-code');
  cssCodeTextArea.readOnly = isLocked;
  const jsCodeTextArea = document.getElementById('js-code');
  jsCodeTextArea.readOnly = isLocked;
  if(isLocked){
    document.getElementById('locked-img').src = "icons/unlock-icon.svg";
  }else{
    document.getElementById('locked-img').src = "icons/lock-icon.svg";
  }
}
