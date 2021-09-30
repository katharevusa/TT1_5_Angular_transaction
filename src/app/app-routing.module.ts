import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TutorialsListComponent } from "./components/tutorials-list/tutorials-list.component";
import { TutorialDetailsComponent } from "./components/tutorial-details/tutorial-details.component";
import { AddTutorialComponent } from "./components/add-tutorial/add-tutorial.component";

import { ProductListComponent } from "./components/product-list/product-list.component";

const routes: Routes = [
  { path: "", redirectTo: "products", pathMatch: "full" },
  //{ path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  // { path: 'tutorials', component: TutorialsListComponent },
  { path: "products", component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
