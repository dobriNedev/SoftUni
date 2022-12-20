import { del, get, post, put } from "./api.js";

//change endpoint
const endpoints = {
    allItems: '/data/posts?sortBy=_createdOn%20desc',
    byItem: '/data/posts',
    byItemId: '/data/posts/',
}

export async function getAll() {
    return get(endpoints.allItems);
}

export async function getById(id) {
    return get(endpoints.byItemId + id);
}
//change url
export async function getByUserId(userId) {
    return get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function deleteById(id) {
    return del(endpoints.byItemId + id);
}

export async function createItem(itemData) {
    return post(endpoints.byItem, itemData);
}

export async function editItem(id, itemData) {
    return put(endpoints.byItemId + id, itemData);
}