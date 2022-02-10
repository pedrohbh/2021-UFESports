import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { EventsComponent } from './pages/events/events.component';
import { CreateeventComponent } from './pages/createevent/createevent.component';
import { ShoweventComponent } from './pages/showevent/showevent.component';
import { MyeventComponent } from './pages/myevent/myevent.component';
import { ConfigComponent } from './pages/config/config.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'events', component: EventsComponent,
  children: [
    { path:'', component: ShoweventComponent},
    { path:'showEvent', component: ShoweventComponent},
    { path:'myEvents', component: MyeventComponent},
    { path:'createEvent', component: CreateeventComponent },
    { path: 'config', component: ConfigComponent},
    ],
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
