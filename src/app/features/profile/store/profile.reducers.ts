import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

const initialState: ProfileState = {
    profileList: []
};

const reducer = createReducer(
    initialState,
    on(profileActions.addProfile, (state, { profile }) => ({ ...state, profile })),
    on(profileActions.addProfileList, (state, { profileList }) => ({ ...state, profileList }))
);

export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
