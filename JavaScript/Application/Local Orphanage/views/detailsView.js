import { html,nothing } from "../lib.js";
import { deleteById, getById  } from "../src/data.js";
import { donate, getDonations, getOwnDonation } from "../src/donation.js";

const detailsTemplate = (post, donations, user, canDonate, isCreator, onDelete, onDonate) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src="${post.imageUrl}" alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${post.title}</h2>
                <p class="post-description">Description: ${post.description}</p>
                <p class="post-address">Address: ${post.address}</p>
                <p class="post-number">Phone number: ${post.phone}</p>
                <p class="donate-Item">Donate Materials: ${donations}</p>

                <!--Edit and Delete are only for creator-->
                ${controls(post, user, canDonate, isCreator, onDelete, onDonate)}
            </div>
        </div>
    </div>
</section>
`;

function controls(post, user, canDonate, isCreator, onDelete, onDonate) {
    if (!user) {
        return nothing;
    }

    if (isCreator) {
        return html
        `
    <div class="btns">
        <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>
    </div>
        `
    }
    if (canDonate) {
        return html
        `
    <div class="btns">
        
        <!--Bonus - Only for logged-in users ( not authors )-->
        <a @click=${onDonate} href="javascript:void(0)" class="donate-btn btn">Donate</a>
    </div>
        `
 
    }
}

export async function showDetails(ctx) {
    const id = ctx.params.id;

    const user = Boolean(ctx.user);

    const post = await getById(id);
    const donations = await getDonations(id);
    let hasDonation;
    if (user) {
        hasDonation = await getOwnDonation(id, ctx.user._id);
    }

    const isCreator = user && ctx.user._id == post._ownerId;

    const canDonate = !isCreator && hasDonation == 0;

    ctx.render(detailsTemplate(post, donations, user, canDonate, isCreator, onDelete, onDonate));

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/');
        }
    }

    async function onDonate() {
        await donate(id);
        ctx.page.redirect('/catalog/' + id);
    }
}