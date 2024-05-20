import { Component } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HomeService } from '../shared/services/home.service';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-user-journey',
  // standalone: true,
  templateUrl: './user-journey.component.html',
  styleUrl: './user-journey.component.scss'
})
export class UserJourneyComponent {
  photoURL: string | undefined;
  subscription: Subscription | undefined;
  showProgressPreviewBar: boolean = false
  color: ThemePalette = 'accent';
  loginError = false;
  loginErrorMessage: any;
  constructor(public _router: Router, public loginService: LoginService, public homeService: HomeService) {
    this.subscription = this.loginService.getUserDetails().subscribe(message => {
      this.photoURL = message?.photoURL
    });
  }
  ngOnInit() {
    if (!this.photoURL) {
      this._router.navigate(['']);
    }
    // this.loginService.getLoginError().subscribe((res: any) => {
    //   this.loginErrorMessage = res
    //   this.loginError = true;
    //   if(this.loginError){
    //     this._router.navigate(['']);
    //   }
    // });
    else {
      this.homeService.DBType = 'BigQuery';
    }
  }

  userJourneyList: any = [{
    userId: "User journey 1",
    userTitle: "Business User",
    userContent: [
      "Natural language questions to the database.",
    ]
  }];

  async navigateToHome(userTitle: String) {

    if (userTitle === 'Business User') {
      this.homeService.checkuserType = 'Business';
      this.showProgressPreviewBar = true;
      this.homeService.getAvailableDatabases().subscribe((res: any) => {
        if (res && res.ResponseCode === 200) {
          this.homeService.setAvailableDBList(res.KnownDB);
          this.showProgressPreviewBar = false;
          this._router.navigate(['home']);
        }
      })
    }
    if (userTitle === 'Opertaional User') {
      this.homeService.checkuserType = 'Operational';
      this._router.navigate(['home']);

    }

    if (userTitle === 'Technical User') {
      this.homeService.checkuserType = 'Technical';
      this._router.navigate(['home']);

    }
  }
  radioChange(event: any) {
    this.homeService.DBType = event.value;
  }

}
