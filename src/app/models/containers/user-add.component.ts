import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder,  FormControl,  FormGroup, Validators } from "@angular/forms";
import { UsersListService } from "../users-list.service";

@Component({
  selector: 'user-add',
  template: `
<form [formGroup]="formData" (ngSubmit)=onSubmit() >
  <label for="firstName">First name:</label>
  <input id="firstName" type="text" formControlName="firstName"/>
  <div *ngIf="formData.controls['firstName'].invalid && formData.controls['firstName'].touched">
             <div *ngIf="formData.controls['firstName'].errors?.['required']">
             First name is required.
           </div>
         </div>
  <br /><br/>
  <label for="lname">Last name:</label>
  <input  formControlName="lastname"type="text" /><br /><br />
  <label for="fgender">Gender:</label>
  <div>
    <input  formControlName="gender" type="radio"  value="Women" />
    <label >Women</label><br />
    <input formControlName="gender" type="radio" value="Men" />
    <label >Men</label><br />
  </div>
<!-- <div>Id:
  <select formControlName="id" id="selectNumber">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
  </select>
</div> -->
<button [disabled] ="!formData.valid" type="submit">Submit</button>
</form>
  `

})
export class UserAddComponent {
  formData: FormGroup;

constructor(
  private formBuilder: FormBuilder,
  private service: UsersListService,

  )
{this.formData = this.formBuilder.group({firstName:['', Validators.required], lastname:'', gender: ''})}



onSubmit(){
this.service.submitForm(this.formData.value).subscribe(
  (data) => {console.log ('Form submitted successfully')},
  (error: HttpErrorResponse) => {
    console.log(error);
}
)

console.log(this.formData.value)
}


}
