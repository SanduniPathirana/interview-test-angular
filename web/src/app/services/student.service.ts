import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  basePath:string=''
  constructor(private http: HttpClient,@Inject('BASE_URL') baseUrl: string
  ) { 
    this.basePath=baseUrl;
  }

  createStudent = (student) =>{
    return this.http.post(this.basePath+ 'students', student);
  }
}
