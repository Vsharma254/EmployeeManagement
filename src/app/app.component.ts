import { Component, } from '@angular/core';
import { Router, NavigationStart, Event } from '@angular/router';
import { User } from './shared/model/User';
import { SerializationHelper } from './shared/SerializationHelper';
// import '../static/js/vendor.js';
// import '../static/js/app.js';
// import '../static/css/vendor.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _user: User={userID:0, fullName:'',password:'',userName:''};
  constructor(private router: Router) {
    // this.router.events.subscribe(value => {
    //   if (value.url == "/login" || value.url == "/register") {

    //   } else {
    //     this._user = SerializationHelper.toInstance<User>(this._user,localStorage.getItem('currentUser'));
        
    //     if(this._user.userID==0)
    //     {
          
    //      this.router.navigate(['/login/']);
    //     }
    //   }
    //   // if (value instanceof NavigationStart) {
    //   // }
    //   // NavigationEnd
    //   // NavigationCancel
    //   // NavigationError
    //   // RoutesRecognized
    // })
  };
}
