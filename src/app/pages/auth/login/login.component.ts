import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { NbLoginComponent } from '@nebular/auth';
import { NbAuthService } from '@nebular/auth';
import { User } from '../../../Models/user.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent extends NbLoginComponent implements OnInit  {

  protected service: NbAuthService;
  protected options: {};
  protected cd: ChangeDetectorRef;
  protected router: Router;
  user: User;
  submitted: boolean;

  constructor(service: NbAuthService, cd: ChangeDetectorRef, router: Router,public authService: AuthService){
      super(service, {}, cd, router);
  }

  ngOnInit() {
    this.cd.reattach();
  }

  login(){
    this.authService.login(this.user).subscribe((res) => {
      if(res){
        this.router.navigate(['dashboard']);
      }
    })
  }

}
