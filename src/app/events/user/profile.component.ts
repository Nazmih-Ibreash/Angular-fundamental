import { Component, Inject, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { TOASTER_TOKEN, Toastr } from 'src/app/common/toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { float: right; color: #E05C65;padding-left: 10px;} 
    .error input {bachground-color: #E3C3C5;}
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-moz-placeholder { color: #999;}
    .error :-moz-placeholder { color: #999;}
    .error : ms-input-placeholder { color: #999;}
    `]
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup
  private firstName!: FormControl;
  private lastName!: FormControl;

  constructor(private authService: AuthService, private router: Router, @Inject(TOASTER_TOKEN) private toastr: Toastr) {

  }


  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  saveProfile(fromValues: { firstName: string; lastName: string; }) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(fromValues.firstName, fromValues.lastName);
      this.toastr.success('Profile Saved');
    }
  }

  validateFistName(): boolean {
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName(): boolean {
    return this.lastName.valid || this.lastName.untouched
  }

}
