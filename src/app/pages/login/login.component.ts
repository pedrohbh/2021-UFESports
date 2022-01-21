import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Data } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loadedData: Data[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  //POST
  postUserData(postUserData: {username: string, password: string}){
    this.http.post(
      'https://angular-course-8fdf4-default-rtdb.firebaseio.com/posts.json',
      postUserData
    ).subscribe(responseData => {
      console.log(responseData)
    });
  }

  //GET
  private fetchUserData() {
    this.http.get('https://angular-course-8fdf4-default-rtdb.firebaseio.com/posts.json')
    // .pipe(map((responseData: {[key: string]}): any[] => {
    //     const datasArray = [];
    //     for (const key in responseData) {
    //       if(responseData.hasOwnProperty(key)) {
    //         datasArray.push({ ...responseData[key], id: key });
    //       }
    //     }
    //     return datasArray;
    //   })
    // )
    .subscribe(userData => {
      // this.loadedData = userData;
    })
  }

  //DELETE
  deleteUserData() {
    this.http.delete('https://angular-course-8fdf4-default-rtdb.firebaseio.com/posts.json')
    .subscribe(userData => {
      this.loadedData = [];
    })
  }

  onFetchUserData(){
    this.fetchUserData();
  }

}
