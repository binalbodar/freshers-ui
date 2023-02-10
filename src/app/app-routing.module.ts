import { NgModule } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { FresherApiComponent } from './fresher-api/fresher-api.component';

const routes: Routes = [
  { path: '', component: FresherApiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router, private ActRouter: ActivatedRoute) {
  }
}
