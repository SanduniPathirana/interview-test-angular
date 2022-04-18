import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  addStudentForm: FormGroup;
  constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.addStudentForm = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      major: new FormControl('',[Validators.required])
    });
  }

  addStudent() {
    console.log(this.addStudentForm.value);
    this.studentService.createStudent(this.addStudentForm.value).subscribe(res=>{
      console.log(res)
    },error=>{
      console.error(error)
    })
  }

}
