import { html } from "../lib.js";
import { getByUserId } from "../src/data.js";

const myPostsTemplate = (posts) => html`
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>
    ${posts.length == 0 ? html`<h1 class="title no-posts-title">You have no posts yet!</h1>` 
    : posts.map(postCardTemplate)}
</section>
`;

const postCardTemplate = (post) => html`
<!-- Display a div with information about every post (if any)-->
<div class="my-posts">
    <div class="post">
        <h2 class="post-title">${post.title}</h2>
        <img class="post-image" src="${post.imageUrl}" alt="Material Image">
        <div class="btn-wrapper">
            <a href="/catalog/${post._id}" class="details-btn btn">Details</a>
        </div>
    </div>
</div>
`;

export async function showMyPosts(ctx) {
    const id = ctx.user._id;
    const posts = await getByUserId(id);
    ctx.render(myPostsTemplate(posts));
}
