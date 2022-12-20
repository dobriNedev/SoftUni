window.addEventListener("load", solve);

function solve() {
  let publishBtn = document.getElementById("form-btn");
  publishBtn.addEventListener('click', createStory);
  let firsName = document.getElementById("first-name");
  let lastName = document.getElementById("last-name");
  let age = document.getElementById("age");
  let title = document.getElementById("story-title");
  let genre = document.getElementById("genre");
  let text = document.getElementById("story");
  let previewSection = document.getElementById("preview-list");
  let main = document.getElementById('main');

  function createStory(e) {
    e.preventDefault();

    let firstNameValue = firsName.value;
    let lastNameValue = lastName.value;
    let ageValue = age.value;
    let titleValue = title.value;
    let genreValue = genre.value;
    let textValue = text.value;

    if (!firstNameValue || !lastNameValue || !ageValue || !titleValue || !textValue) {
      return;
    }

    let li = document.createElement('li');
    li.classList.add('story-info');

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = `Name: ${firstNameValue} ${lastNameValue}`;
    article.appendChild(h4);

    let pAge = document.createElement('p');
    pAge.textContent = `Age: ${ageValue}`;
    article.appendChild(pAge);

    let pTitle = document.createElement('p');
    pTitle.textContent = `Title: ${titleValue}`;
    article.appendChild(pTitle);

    let pGenre = document.createElement('p');
    pGenre.textContent = `Genre: ${genreValue}`;
    article.appendChild(pGenre);

    let pText = document.createElement('p');
    pText.textContent = textValue;
    article.appendChild(pText);

    li.appendChild(article);

    let saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');
    saveBtn.textContent = 'Save Story';
    saveBtn.addEventListener('click', saveIt);
    li.appendChild(saveBtn);

    let editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit Story';
    editBtn.addEventListener('click', editIt);
    li.appendChild(editBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete Story';
    deleteBtn.addEventListener('click', deleteIt);
    li.appendChild(deleteBtn);

    previewSection.appendChild(li);

    firsName.value = '';
    lastName.value = '';
    age.value = '';
    title.value = '';
    genre.value = '';
    text.value = '';

    e.target.disabled = true;
  }

  function saveIt(e) {
    Array.from(document.getElementById('main').children).forEach(el => el.remove());
    let h1 = document.createElement('h1');
    h1.textContent = "Your scary story is saved!";
    main.appendChild(h1);
  }

  function editIt(e) {
    //debugger;
    let data = e.target.parentElement.children[0].children;
    let btns = e.target.parentElement.querySelectorAll('button'); //!!NODE list!! not an array!!
    let nameValue = data[0].textContent;
    
    let ageValue = data[1].textContent;
    let titleValue = data[2].textContent;
    let genreValue = data[3].textContent;
    let textValue = data[4].textContent;

    firsName.value = nameValue.split(': ')[1].split(' ')[0];
    lastName.value = nameValue.split(': ')[1].split(' ')[1];
    age.value = ageValue.split(': ')[1];
    title.value = titleValue.split(': ')[1];
    genre.value = genreValue.split(': ')[1];
    text.value = textValue;

    publishBtn.disabled = false;

    
    Array.from(btns).forEach(element => {
      element.disabled = true;
    });
    //Array.from(e.target.parentElement.children).forEach(el => el.remove());
    e.target.parentElement.remove()
  }

  function deleteIt(e) {
    e.target.parentElement.remove();
    publishBtn.disabled = false;
  }
}
