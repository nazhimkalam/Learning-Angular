import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/departments-list', pathMatch: 'full' },
  { path: 'departments-list', component: DepartmentListComponent },
  { path: 'departments-list/:id', component: DepartmentDetailComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: '**', component: PageNotFoundComponent }, // wild card route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  DepartmentListComponent,
  EmployeeListComponent,
  PageNotFoundComponent,
  DepartmentDetailComponent,
];
