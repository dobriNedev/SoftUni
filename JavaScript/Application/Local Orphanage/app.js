import { page, render } from './lib.js';
import { getUserData } from './src/util.js';
import { showMyPosts } from './views/catalogView.js';
import { showCreate } from './views/createView.js';
import { showDetails } from './views/detailsView.js';
import { showEdit } from './views/editView.js';
import { showDashboard } from './views/homeView.js';
import { showLogin } from './views/loginView.js';
import { updateNav } from './views/navView.js';
import { showRegister } from './views/registerView.js';

const main = document.getElementById('main-content');

page(decoreteContext);
page('/', showDashboard);
page('/catalog', showMyPosts);
page('/catalog/:id', showDetails);
page('/edit/:id', showEdit);
page('/create', showCreate);
page('/login', showLogin);
page('/register', showRegister);

updateNav();
page.start();

function decoreteContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    const user = getUserData();
    if (user) {
        ctx.user = user;
    }

    next();
}

function renderMain(content) {
    render(content, main);
}