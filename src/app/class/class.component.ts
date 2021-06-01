import { Component, OnInit } from '@angular/core';
import { Class} from '../schools';
import { ClassServiceService } from '../class-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  myclass!: Class[] ;
  public subscription!: Subscription;
  constructor( private classServiceService: ClassServiceService) { }

  ngOnInit(): void {
    this.getAllClass()
  }
  getAllClass(): void {
    this.subscription = this.classServiceService.getAllClass().subscribe(data =>{
      console.log(
        data
      )
      this.myclass = data
    })
  }
  add(name: string){
    this.subscription = this.classServiceService.addClass({name} as Class).subscribe(data =>{
      this.getAllClass()
    });
  }
  deleteClass(id: number): void{
    this.myclass = this.myclass.filter(h=>h.id !==id);
    this.classServiceService.deleteClass(id).subscribe();
  }

}
