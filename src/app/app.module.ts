import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClassComponent } from './class/class.component';
import { ClassServiceService } from './class-service.service';
import { DetailClassComponent } from './detail-class/detail-class.component';
import { StudentComponent } from './student/student.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    DetailClassComponent,
    StudentComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ClassServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
