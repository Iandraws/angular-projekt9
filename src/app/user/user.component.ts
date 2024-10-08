import { Component, Input,input,computed,Output,EventEmitter,output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

@Input ({required:true}) user!:{
id:string;
name:string;
avatar:string;
}
  @Output() select=new EventEmitter<string>();
  // select=output<string>()

  // avatar=input.required<string>();
  // name=input.required<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }
// imagePath=computed(()=>{
// return 'assets/users/'+this.avatar();
// })
  

  onSelectedUser() {
this.select.emit(this.user.id)


  }
}
