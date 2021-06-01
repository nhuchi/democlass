import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Student, UpdateClass} from '../schools';
import { Subscription } from 'rxjs';
import { ClassServiceService } from '../class-service.service';
import { Class } from '../schools';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student!: Student[];
  title= 'Stdents';
  public id!: number;
  public index!: number;
  public class_id!: number;
  public subscriptionParams!: Subscription;
  public subscription!: Subscription;
  public name_class!: string;

  constructor(
    private activeRouterService: ActivatedRoute,
    private classService: ClassServiceService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.subscriptionParams = this.activeRouterService.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.class_id = Number(params.get('classId'));
      this.subscription = this.classService.getClass(this.class_id).subscribe((data: Class) => {
        this.student = data.students;
        for (let i = 0; i < this.student.length; i++) {
          if (this.id == this.student[i].id) {
            this.index = i;
          }
        }
        this.name_class = data.name;
      })
    })
  }
  goBack(): void {
    this.location.back();
  }
  save(name: string): void {
    const reqData: UpdateClass = {
      id: this.class_id,
      name: this.name_class,
      students: [{
        id: this.id,
        name: name,
        class_id: this.class_id
      }],
      DeletedStudents: []
    }
    this.subscription = this.classService.updateClass(reqData).subscribe(() => this.goBack())
  }
}
