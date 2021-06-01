import { Component, OnInit } from '@angular/core';
import { Class, Student, UpdateClass } from '../schools';
import { ClassServiceService } from '../class-service.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public id!: number;
  public index!: number;
  public name_class!: string;
  listStudent!: Student[];
  listClass!: Class[];
  public subscription!: Subscription;

  constructor(private studentService: ClassServiceService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.id = Number(this.route.snapshot.paramMap.get('id'));
   //console.log("hjygyuu",this.id);

    this.getAllStudent(this.id);
  }
  getAllStudent(id: number) {
    this.studentService.getAllStudent(id).subscribe(data => {
      this.listStudent = data.students;
    })
    this.subscription = this.studentService.getAllClass().subscribe(data => {
      this.listClass = data
      for (let i = 0; i < this.listClass.length; i++) {
        if (this.id == this.listClass[i].id) {
          this.index = i;
        }
      }
      this.name_class = this.listClass[this.index].name;
    })
  }
  add(name: string): void {
    const reqData: UpdateClass = {
      id: this.id,
      name: this.name_class,
      students: [{
        id: -1,
        name: name,
        class_id: this.id
      }],
      DeletedStudents: []
    }
    this.subscription = this.studentService.updateClass(reqData).subscribe(() =>
      this.getAllStudent(this.id)
    )
  }

  deleteStudents(id: number): void {
    const reqData: UpdateClass = {
      id: this.id,
      name: this.name_class,
      students: [],
      DeletedStudents: [{
        id: id
      }]
    }
    this.subscription = this.studentService.updateClass(reqData).subscribe(() =>
      this.getAllStudent(this.id)
    )
  }

  goBack(): void {
    this.location.back();
  }
}
