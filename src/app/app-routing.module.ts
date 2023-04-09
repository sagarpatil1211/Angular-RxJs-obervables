import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BahaviorComponent } from './bahavior/bahavior.component';
import { HomeComponent } from './home/home.component';
import { ObeOberverSubComponent } from './obe-oberver-sub/obe-oberver-sub.component';
import { OperatorComponent } from './operator/operator.component';
import { ReplayComponent } from './replay/replay.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'obesever', component:ObeOberverSubComponent},
  {path:'operator', component:OperatorComponent},
  {path:'subject', component:SubjectComponent},
  {path:'behavior', component:BahaviorComponent},
  {path:'replay', component:ReplayComponent},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
