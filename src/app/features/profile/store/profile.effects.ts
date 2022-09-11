import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ProfileService } from './profile.service';
import { profileActions } from './profile.actions';
import { UserProfile } from '@interfaces';

@Injectable()
export class ProfileEffects {

    constructor (
        private actions$: Actions,
        private profileService: ProfileService
    ) { }

    fetchProfile$ = createEffect(() =>
        this.actions$.pipe(
            ofType(profileActions.fetchProfile),
            switchMap(() => this.profileService.getProfile(1)),
            map((profile: UserProfile[]) => profileActions.addProfile({ profile: profile[0] }))
        ));

    fetchProfileList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(profileActions.fetchProfileList),
            switchMap(() => this.profileService.getProfile(10)),
            map((profileList: UserProfile[]) => profileActions.addProfileList({ profileList }))
        ));

}
