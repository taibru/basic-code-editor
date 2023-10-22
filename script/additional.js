//create additional features like colorful title and footor.

const colors = ['#4285f4', '#ea4335', '#fbbc05', '#4285f4'];

const title = ['B','A','S','I','C',' ','C','O','D','E',' ','E','D','I','T','O','R' ];

//for heading section
const wordsEl = document.querySelector('#title');
console.log(wordsEl);

title.forEach((word, i)=>{
      const headingChild = wordsEl.appendChild(document.createElement('span'));
      headingChild.style.color = 
      headingChild.innerHTML = title[i];
      console.log(headingChild); 
      headingChild.style.color = colors[Math.ceil(Math.random()*(colors.length+1))-1];
});

//for footer section
const names = ['N', 'e', 'e', 'r', 'a', 'j', ' ', 'J', 'a', 'n', 'g', 'i', 'd'];
const nameEl = document.getElementById('name');
names.forEach((name, i)=>{
  const elem = nameEl.appendChild(document.createElement('span'));
  elem.innerHTML = name;
  elem.style.color = colors[Math.ceil(Math.random()*(colors.length+1))-1];
});