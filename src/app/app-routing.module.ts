import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './class/class.component';
import { DetailClassComponent } from './detail-class/detail-class.component';
import { StudentComponent } from './student/student.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',component: ClassComponent,
  },
  {path: 'class/:id', component: DetailClassComponent },
  {path: ':classId/:id', component: StudentComponent },
  { path: ':id', component: ViewComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
