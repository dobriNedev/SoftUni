import { del, get, post, put } from "./api.js";

export async function getAll() {
    return get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
}

export async function getById(id) {
    return get('/data/pets/' + id);
}

export async function deleteById(id) {
    return del('/data/pets/' + id);
}

export async function createItem(itemData) {
    return post('/data/pets', itemData);
}

export async function editItem(id, itemData) {
    return put('/data/pets/' + id, itemData);
}