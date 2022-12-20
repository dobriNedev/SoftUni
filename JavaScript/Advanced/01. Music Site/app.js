window.addEventListener('load', solve);

function solve() {
   
    let genreField = document.getElementById('genre');
    let songNameField = document.getElementById('name');
    let authorField = document.getElementById('author');
    let dateField = document.getElementById('date');
    let addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', add);
    let allHitsContainer = document.getElementsByClassName('all-hits-container')[0];
    let savedContainer = document.getElementsByClassName('saved-container')[0];

    function add(e) {
        if (genreField.value === '' || songNameField.value === '' || authorField.value === '' || dateField.value === '') {
            return;
        }
        e.preventDefault();
        let genreValue = genreField.value;
        let songNameValue = songNameField.value;
        let authorValue = authorField.value;
        let dateValue = dateField.value;
        let div = createDivElement(genreValue, songNameValue, authorValue, dateValue);

        allHitsContainer.appendChild(div);

        genreField.value = '';
        songNameField.value = '';
        authorField.value = '';
        dateField.value = '';
    }

    function createDivElement(genreValue, songNameValue, authorValue, dateValue) {
        let div = document.createElement('div');
        div.classList.add('hits-info');

        let img = document.createElement('img');
        img.src = "./static/img/img.png"
        div.appendChild(img);

        let genreInfo = document.createElement('h2');
        genreInfo.textContent = `Genre: ${genreValue}`;

        div.appendChild(genreInfo);

        let songNameInfo = document.createElement('h2');
        songNameInfo.textContent = `Name: ${songNameValue}`;

        div.appendChild(songNameInfo);

        let authorInfo = document.createElement('h2');
        authorInfo.textContent = `Author: ${authorValue}`;

        div.appendChild(authorInfo);

        let dateInfo = document.createElement('h3');
        dateInfo.textContent = `Date: ${dateValue}`;

        div.appendChild(dateInfo);

        let saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save song';
        saveBtn.classList.add("save-btn");
        saveBtn.addEventListener('click', saveSong);

        div.appendChild(saveBtn);

        let likeBtn = document.createElement('button');
        likeBtn.textContent = 'Like song';
        likeBtn.classList.add('like-btn');
        likeBtn.addEventListener('click', likeSong);

        div.appendChild(likeBtn);

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', deleteSong);

        div.appendChild(deleteBtn);

        return div;
    }

    function saveSong(e) {
        let currentSong = e.target.parentElement.children;
        
        let genreValue = currentSong[1].textContent.split(': ')[1];
        let songNameValue = currentSong[2].textContent.split(': ')[1];
        let authorValue = currentSong[3].textContent.split(': ')[1];
        let dateValue = currentSong[4].textContent.split(': ')[1];
        let div = createDivElement(genreValue, songNameValue, authorValue, dateValue);
     
        savedContainer.appendChild(div);
        Array.from(savedContainer.querySelectorAll('.save-btn')).forEach(btn => btn.remove());
        Array.from(savedContainer.querySelectorAll('.like-btn')).forEach(btn => btn.remove());
        e.target.parentElement.remove();
    }

    function likeSong(e) {
        let likes = document.querySelector('.likes p');
        let likesArr = likes.textContent.split(': ');
        let valueToIncrement = Number(likesArr.pop());
        valueToIncrement ++;
        likesArr.push(valueToIncrement);
        likes.textContent = likesArr.join(': ');
        let likeBtn = e.target;
        likeBtn.disabled = true;

    }

    function deleteSong(e) {
        e.target.parentElement.remove();
    }
}