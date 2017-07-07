import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SaucersComponent } from './saucers/saucers.component';
import { CommentsComponent } from './comments/comments.component';

const APP_ROUTES: Routes = [
{ path: '', component: RestaurantsComponent },
{ path: 'restaurants/:id/saucers', component: SaucersComponent },
{ path: 'saucers/:id/comments', component: CommentsComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);