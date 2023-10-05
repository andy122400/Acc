import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private apiUrl = 'http://localhost:3000/'; // 請替換為你的 API URL

  constructor(private http: HttpClient) {}

  // 發送 GET 請求以獲取數據
  getData(): Observable<any> {
    const url = 'http://localhost:3000/posts';
    return this.http.get(url);
  }
  // users: User[]; // 假設 User 是一個 Interface，用於定義用戶數據結構

  // constructor(private userService: UserService) {}

  // ngOnInit(): void {
  //   this.userService.getUsers().subscribe((data: User[]) => {
  //     this.users = data; // 將服務返回的數據賦值給組件的屬性
  //   });
  // }
}
