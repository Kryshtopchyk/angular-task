import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProfile } from '@interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor (private http: HttpClient) { }

    getProfile (numberOfUsers: number): Observable<UserProfile[]> {

        return this.http.get(`https://randomuser.me/api?results=${numberOfUsers}`).pipe(map((response: any) => (
            response.results.map((user: any) => this.parseRandomApiUserToProfile(user))     
        )));

    }

    private parseRandomApiUserToProfile (user: any): UserProfile {

        return {
            cellNumber: user.cell,
            city: user.location.city,
            dateOfBirth: new Date(user.dob.date).toDateString(),
            email: user.email,
            firstName: user.name.first,
            lastName: user.name.last,
            phoneNumber: user.phone,
            picture: user.picture.medium,
            state: user.location.state,
            uuid: user.login.uuid
        };

    }

}
