import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './../core/components/header/header.component';
import { TitleComponent } from './../core/components/title/title.component';
import { SidebarComponent } from './../core/components/sidebar/sidebar.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars, faColumns, faIdCard, fas } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [AdminComponent, HeaderComponent, TitleComponent, SidebarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule
  ],
  exports: [FontAwesomeModule]
})
export class AdminModule {
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas);
    library.addIcons(faBars, faColumns, faIdCard);
  }
 }
