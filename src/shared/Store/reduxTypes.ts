import { IproductType } from '../types/types';
import { store } from './Store';

export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch'];

export interface IbasketAction {
    type: string;
    payload: IproductType;
}

export interface ImodalState {
    modalMainState: boolean;
}

export interface ImodalAction {
    type: string;
    payload: ImodalState;
}
