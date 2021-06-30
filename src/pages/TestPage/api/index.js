import api from '../../../api/apiConfig';

export const createOrder = (body) => api.post('/order', body);