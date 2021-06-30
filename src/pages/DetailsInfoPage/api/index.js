import api from '../../../api/apiConfig';

export const getPokemonDetails = (id) => api.get(`/products/${id}`);