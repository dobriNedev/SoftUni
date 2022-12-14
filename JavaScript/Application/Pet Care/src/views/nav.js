import { html, render, page } from '../api/lib.js';
import { getUserData } from '../api/util.js';
import { logout } from '../api/user.js';

const nav = document.querySelector('header');
//document.getElementById("logoutBtn").addEventListener('click', onLogout);

const navTemplate = (hasUser) => html`
<nav>
<section class="logo">
    <img src="./images/logo.png" alt="logo">
</section>
<ul>
<!--Users and Guest-->
<li><a href="/">Home</a></li>
<li><a href="/catalog">Dashboard</a></li>
${!hasUser 
        ? html`<li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>` 
        : html`
    <li><a href="/create">Create Postcard</a></li>
    <li><a @click=${onLogout} href="javascript:void(0)">Logout</a></li>`
}
</ul>
</nav>`;
 
export function updateNav() {
    const user = getUserData();

    render(navTemplate(user), nav);
}

function onLogout() {
    logout();
    updateNav();
    page.redirect('/');
}