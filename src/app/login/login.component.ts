import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/User';
import { Router } from '@angular/router';
import { UserService } from '../shared/service/user.service';

@Component({
    selector: 'login-screen',
    templateUrl: './login.component.html', providers: [UserService]
})
export class LoginComponent implements OnInit {
    constructor(private _UserService: UserService, private router: Router) { }
    public user: User = { userID: 0, userName: '', fullName: '', password: '' };

    ngOnInit() { }
    public loginUser() {
        if (this.user.userName == '') {
            alert('Please enter user name');
            return;
        }
        if (this.user.password == '') {
            alert('Please enter password');
            return;
        }
        this._UserService.authenticateUser(this.user).subscribe(res => {
            this.user = res;
            if (this.user.userID == 0)
                alert('User name or password is incorrect');
            else {
                localStorage.setItem('currentUser', JSON.stringify( this.user));
                this.router.navigate(['/myapp/'])
            }
        });
    }
}