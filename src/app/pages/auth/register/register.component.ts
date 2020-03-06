import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { NbRegisterComponent } from '@nebular/auth';
import { NbAuthService } from '@nebular/auth';
import { User } from '../../../Models/user.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent extends NbRegisterComponent implements OnInit {

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

  register() {
    let user: any = {};
    user.name = this.user.fullName;
    user.email = this.user.email;
    user.password= this.user.password;
    this.authService.register(user).subscribe((res) => {
      if(res){
        this.router.navigate(['dashboard']);
      }
    })
  }

}
