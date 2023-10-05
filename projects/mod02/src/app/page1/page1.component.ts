import { MyServiceService } from './../my-service.service';
import { Component } from '@angular/core';
import { MyInterface, jsonData } from '../my-interface';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styles: [
  ]
})



export class Page1Component {
constructor(private conToAPI: MyServiceService){}

  items=["Andy","Bat","Cat"]
  Mydata: MyInterface[]=[];
ngOnInit(): void {
  this.conToAPI.getData().subscribe(
    // next:(resp: MyInterface[])=>this.Mydata=resp

    (data: MyInterface[]) => {
      this.Mydata = data; // 將服務返回的數據賦值給組件的屬性
  });
}

    // Mydata:any =this.;

  inputText: string = 'Hello, Angular!22';


}
