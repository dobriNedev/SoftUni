import { html } from '../lib.js';
import { getAll } from '../src/data.js'

const homeTemplate = (posts) => html`
<section id="dashboard-page">
<h1 class="title">All Posts</h1>
<!-- Display a div with information about every post (if any)-->
${posts.length == 0 ? html`<h1 class="title no-posts-title">No posts yet!</h1>` 
: posts.map(homeCardTemplate)}
</section>
`;

const homeCardTemplate = (post) => html`
<div class="all-posts">
    <div class="post">
        <h2 class="post-title">${post.title}</h2>
        <img class="post-image" src="${post.imageUrl}" alt="Material Image">
        <div class="btn-wrapper">
            <a href="/catalog/${post._id}" class="details-btn btn">Details</a>
        </div>
    </div>
</div>
`;

export async function showDashboard(ctx) {
    const posts = await getAll();
    ctx.render(homeTemplate(posts));
}