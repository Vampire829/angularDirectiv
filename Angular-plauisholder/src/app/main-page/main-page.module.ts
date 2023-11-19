import { NgModule } from "@angular/core";
import { MainPageComponent } from './main-page.component';
import { SaidebarComponent } from './saidebar/saidebar.component';
import { PostsComponent } from './posts/posts.component';
import { RecomendationsListComponent } from './recomendations-list/recomendations-list.component';

@NgModule({
    declarations: [
    MainPageComponent,
    SaidebarComponent,
    PostsComponent,
    RecomendationsListComponent,
  ],
    exports: [
    MainPageComponent,
    ],
})

export class MainPageModule{

}