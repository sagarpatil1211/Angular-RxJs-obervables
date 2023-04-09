import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BahaviorComponent } from './bahavior/bahavior.component';
import { HomeComponent } from './home/home.component';
import { ObeOberverSubComponent } from './obe-oberver-sub/obe-oberver-sub.component';
import { OperatorComponent } from './operator/operator.component';
import { SubjectComponent } from './subject/subject.component';
import { Comp1Component } from './subject/comp1/comp1.component';
import { Comp2Component } from './subject/comp2/comp2.component';
import { Comp3Component } from './bahavior/comp3/comp3.component';
import { ReplayComponent } from './replay/replay.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ObeOberverSubComponent,
    OperatorComponent,
    SubjectComponent,
    BahaviorComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplayComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
