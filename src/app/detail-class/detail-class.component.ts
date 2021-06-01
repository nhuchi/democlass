import { Component, OnInit } from '@angular/core';
import { ClassComponent } from '../class/class.component';
import { ClassServiceService } from '../class-service.service';
import { Class, UpdateClass } from '../schools';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Routes} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-class',
  templateUrl: './detail-class.component.html',
  styleUrls: ['./detail-class.component.css']
})
export class DetailClassComponent implements OnInit {

  class!: Class;
  public id!: number;
  public subscriptionParams!: Subscription;
  public subscription!: Subscription;
  constructor(
    private activeRouterService: ActivatedRoute,
    private classServiceService: ClassServiceService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(): void{
    this.subscriptionParams= this.activeRouterService.paramMap.subscribe(params =>{
      this.id = Number(params.get('id'));
      //console.log(this.id)
      this.subscription = this.classServiceService.getClass(this.id).subscribe((data: Class)=>{
        this.class= data;
        console.log(data)
      })
    })
  }
  goBack(): void{
    this.location.back();
  }
  save(name: string): void{
    const reqData: UpdateClass = {
      id: this.id,
      name: name,
      students: [],
      DeletedStudents: []
    }
    this.subscription = this.classServiceService.updateClass(reqData).subscribe(()=>this.goBack());
  }
}

