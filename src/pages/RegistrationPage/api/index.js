import api from '../../../api/apiConfig';

export const getRegistrationUser = (body) => api.post('auth/signup', body);