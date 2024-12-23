import axios from 'axios';
import type { AxiosInstance, CreateAxiosDefaults, AxiosRequestConfig, AxiosError } from 'axios';

export const createApi = (config: CreateAxiosDefaults): AxiosInstance => {
    const instance = axios.create({
        withCredentials: true,
        ...config,
    });
    return instance;
};

export const apiEndpoint = (instance: AxiosInstance) => {
    return async <T,>(requestConfig: AxiosRequestConfig): Promise<T> => {
        return new Promise((resolve, reject) => {
            instance
                .request({
                    ...requestConfig,

                    headers: {
                        ...requestConfig.headers,
                        'Content-Type': requestConfig.headers?.['Content-Type'] || 'application/json',
                    },
                    data: requestConfig.data,
                })
                .then((response) => resolve(response.data))
                .then((response) => console.log(response))
                .catch((error: AxiosError) => {
                    reject(error.message);
                });
        });
    };
};
