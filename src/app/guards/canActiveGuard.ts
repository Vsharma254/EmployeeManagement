import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../shared/service/user.service';
import { User } from '../shared/model/User';
import { SerializationHelper } from '../shared/SerializationHelper';
@Injectable()
export class CanActiveGuardForRoute implements CanActivate {
    _user: User = { userID: 0, fullName: '', password: '', userName: '' };
    constructor(private userSer: UserService, private router: Router) { }
    canActivate() {
        this._user= { userID: 0, fullName: '', password: '', userName: '' };
        this._user = SerializationHelper.toInstance<User>(this._user, localStorage.getItem('currentUser'));
        if (this._user.userID == 0) {
            this.router.navigate(['/login/']);
            return false;
        }
        else { return true; }
    }
}