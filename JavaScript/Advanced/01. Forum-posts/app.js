window.addEventListener("load", solve);

function solve() {
  document.getElementById("publish-btn").addEventListener('click', publishPost);
  document.getElementById('clear-btn').addEventListener('click', clearPost);
  let title = document.getElementById("post-title");
  let category = document.getElementById("post-category");
  let postText = document.getElementById("post-content");
  let postsForReviewSection = document.getElementById("review-list");
  let approveSection = document.getElementById('published-list');

  function publishPost(e) {
    let titleValue = title.value;
    let categoryValue = category.value;
    let postTextValue = postText.value;

    if (!titleValue || !categoryValue || !postTextValue) {
      return;
    }

    let li = document.createElement('li');
    li.classList.add('rpost');

    let article = document.createElement('article');
    li.appendChild(article);

    let h = document.createElement('h4');
    h.textContent = titleValue;
    article.appendChild(h);

    let categoryP = document.createElement('p');
    categoryP.textContent = `Category: ${categoryValue}`;
    article.appendChild(categoryP);

    let contentP = document.createElement('p');
    contentP.textContent = `Content: ${postTextValue}`;
    article.appendChild(contentP);

    let editBtn = document.createElement('button');
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', editPost);
    li.appendChild(editBtn);

    let approveBtn = document.createElement('button');
    approveBtn.classList.add('action-btn');
    approveBtn.classList.add('approve');
    approveBtn.textContent = 'Approve';
    approveBtn.addEventListener('click', approvePost);
    li.appendChild(approveBtn);

    postsForReviewSection.appendChild(li);

    title.value = '';
    category.value = '';
    postText.value = '';
  }

  function editPost(e) {
    let currentPost = e.target.parentElement;
    let articleContent = currentPost.getElementsByTagName('article')[0].children;
    let titleValue = articleContent[0].textContent;
    let categoryValue = articleContent[1].textContent;
    let contentValue = articleContent[2].textContent;

    title.value = titleValue;
    category.value = categoryValue.split(': ')[1];
    postText.value = contentValue.split(': ')[1];
    currentPost.remove();
  }

  function approvePost(e) {
    let currentPost = e.target.parentElement;
    approveSection.appendChild(currentPost);
    Array.from(currentPost.querySelectorAll('button')).forEach(btn => btn.remove());
  }

  function clearPost(e) {
    Array.from(approveSection.children).forEach(el => el.remove());
  }

}
