import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { ProfileComponent } from './components/profile/profile.component';
import { HerbsComponent } from './components/herbs/herbs.component';
import { HerbComponent } from './components/herb/herb.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['home'])

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent },
  { path: 'login', component: LoginComponent, ...canActivate(redirectToHome) },
  { path: 'sign-up', component: SignUpComponent, ...canActivate(redirectToHome) },
  { path: 'home', component: HomeComponent, ...canActivate(redirectToLogin) },
  { path: 'profile', component: ProfileComponent, ...canActivate(redirectToLogin) },
  { path: 'herbs', component: HerbsComponent, ...canActivate(redirectToLogin) },
  { path: 'herb', component: HerbComponent, ...canActivate(redirectToLogin) },
  { path: 'recipe', component: RecipeComponent, ...canActivate(redirectToLogin) },
  { path: 'create', component: CreateRecipeComponent, ...canActivate(redirectToLogin) },
  { path: 'edit/:id', component: EditRecipeComponent, ...canActivate(redirectToLogin) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
