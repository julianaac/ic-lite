import { UserService } from './../../../services/user.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { formatDate } from '@angular/common';
declare const $:any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(
    private http: UserService
  ){}
  name:string = "";
  file:any;
  getName(name:string) {
    this.name = name;
  }
  getFile(event:any){
    this.file = event.target.files[0];
    console.log('file',this.file)
  }
  submit() {
//criando o formData objeto
    let formData = new FormData();
    formData.set("name",this.name);
    formData.set("file",this.file);

    // this.http.insert().subscribe(
    //   (response)=>{

    //   }
    // );
    //submit os dados na api
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
