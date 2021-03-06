import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { HttpModule } from '@angular/http';
//AngularFire Imports
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabase} from 'angularfire2/database-deprecated';
import { AngularFireAuth } from "angularfire2/auth";
//test completed
//Component Imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
//Service Imports
import { ClientService} from './services/client.service'

const appRoutes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
];

export const firebaseConfig = {
  apiKey: "AIzaSyBMDX4P71s41-HpeupjjNgBYY2SeE1IA6I",
  authDomain: "clientpanel-7fc90.firebaseapp.com",
  databaseURL: "https://clientpanel-7fc90.firebaseio.com",
  storageBucket: "clientpanel-7fc90.appspot.com",
  messagingSenderId: "175372806702"
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
