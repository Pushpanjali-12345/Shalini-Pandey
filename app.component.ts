import { Component } from '@angular/core';
import {MyserService} from './myser.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
mydata:any;
  constructor(private obj:MyserService){

  }
 
  name = 'secondApp';
myfun(){
   this.obj.CallApi().subscribe(data=>
   {
   this.mydata=data;
   console.log(data);
   },
   error=>{
   console.log(error);
   });
   
      }
   }

