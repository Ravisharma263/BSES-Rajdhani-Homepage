import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';



import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { InfobarComponent } from './infobar/infobar.component';
import { MarqueeComponent } from './marquee/marquee.component';
import { ImageboxComponent } from './imagebox/imagebox.component';






@NgModule({
  declarations: [
    Component,
    RouterOutlet,

    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    ContainerComponent,
    InfobarComponent,
    MarqueeComponent,
    ImageboxComponent,
    RouterModule],
  imports: [BrowserModule, ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule],
})

export class AppModule {}

