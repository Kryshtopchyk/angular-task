import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from '@interfaces';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getProfileList } from '@store/selectors';

@Component({
    selector: 'crx-profile-list',
    styleUrls: ['./profile-list.component.scss'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit {

    users$ = this.store.select(getProfileList);

    constructor (private store: Store<AppState>, private route: Router) { }

    ngOnInit () {

        this.store.dispatch(profileActions.fetchProfileList());

    }

    profileClicked (user: UserProfile) {

        this.store.dispatch(profileActions.addProfile({ profile: user }));
        this.route.navigate([`./profile/${user.uuid}`]);
        
    }

}
