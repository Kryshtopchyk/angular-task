import { UserProfile } from '@interfaces';
import { createAction, props } from '@ngrx/store';

const fetchProfile = createAction('[Profile] Fetch');
const addProfile = createAction('[Profile] Fetch Success', props<{ profile: UserProfile }>());

const fetchProfileList = createAction('[Profile List] Fetch');
const addProfileList = createAction('[Profile List] Fetch Success', props<{ profileList: UserProfile[] }>());

export const profileActions = {
    addProfile,
    addProfileList,
    fetchProfile,
    fetchProfileList
};
