import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleManagentComponent } from './views/Vehicle-Management/vehicle-managent.component';
import { VehicleDetailComponent } from './views/vehicle-detail/vehicle-detail.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/vehicle', pathMatch: 'full' },
  { path: 'vehicle/:id', component: VehicleDetailComponent },

  { path: 'vehicle', component: VehicleManagentComponent },
  {path :'notfound', component:PageNotFoundComponent},
  { component: PageNotFoundComponent, path: "**" }

  // Add more routes here as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
    
 }
