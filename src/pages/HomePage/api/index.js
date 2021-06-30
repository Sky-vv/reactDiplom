import api from '../../../api/apiConfig';

export const signIn = (body) => api.post('auth/signIn', body);