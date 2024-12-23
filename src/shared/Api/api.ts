import { createApi, apiEndpoint } from './apiService';
const BASE_URL = 'http://localhost:3000';

export const apiInstace = createApi({
    baseURL: BASE_URL,
});
export const mainApi = apiEndpoint(apiInstace);
