
import { getById, editItem } from '../api/data.js';
import { html } from '../api/lib.js';
import { createSubmitHandler } from '../api/util.js';

const editTemplate = (item, onEdit) => html`
<section id="editPage">
<form @submit=${onEdit} class="editForm">
    <img src="./images/editpage-dog.jpg">
    <div>
        <h2>Edit PetPal</h2>
        <div class="name">
            <label for="name">Name:</label>
            <input name="name" id="name" type="text" .value=${item.name}>
        </div>
        <div class="breed">
            <label for="breed">Breed:</label>
            <input name="breed" id="breed" type="text" .value=${item.breed}>
        </div>
        <div class="Age">
            <label for="age">Age:</label>
            <input name="age" id="age" type="text" .value=${item.age}>
        </div>
        <div class="weight">
            <label for="weight">Weight:</label>
            <input name="weight" id="weight" type="text" .value=${item.weight}>
        </div>
        <div class="image">
            <label for="image">Image:</label>
            <input name="image" id="image" type="text" .value=${item.image}>
        </div>
        <button class="btn" type="submit">Edit Pet</button>
    </div>
</form>
</section>
`;

export async function showEdit(ctx) {

    const id = ctx.params.id;
    const item = await getById(id);//aka pet

    ctx.render(editTemplate(item, createSubmitHandler(onEdit)));

    async function onEdit({name, breed, age, weight, image}) {
        //if([name, breed, age, weight, image].some(element => element == ''))
        if (!name || !breed|| !age|| !weight|| !image) {
            alert('All fields are required!');
            return;
        }
        await editItem(id, {
            name,
            breed,
            age,
            weight,
            image
        });
        
        ctx.page.redirect('/catalog/' + id);
    }
}