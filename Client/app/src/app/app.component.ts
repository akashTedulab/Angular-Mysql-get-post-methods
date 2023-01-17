import { Component } from '@angular/core';
import { ServiceService } from './services/service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users : any;
  constructor(private userData:ServiceService) {
    userData.user().subscribe((data)=>{
      console.log(data);
      this.users = data
    });
  }
  getData(item:any){
    this.userData.saveUsers(item).subscribe((data)=>{
      console.log(item)
    })
  }
}
