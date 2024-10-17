
import { NgModule } from "@angular/core"; 
import { BrowserModule } from "@angular/platform-browser";
import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { RouterOutlet } from '@angular/router';


import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { InfobarComponent } from './infobar/infobar.component';
import { MarqueeComponent } from './marquee/marquee.component';
import { ImageboxComponent } from './imagebox/imagebox.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
 
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    ContainerComponent,
    InfobarComponent,
    MarqueeComponent,
    ImageboxComponent,
    RouterModule// Use RouterModule.forRoot with routes
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected to styleUrls (plural)
})
export class AppComponent {
  title = 'bses-page';
  
}
