import api from '../../../api/apiConfig';

export const getPokemon = (id) => api.get(`/products?page=${id}`);