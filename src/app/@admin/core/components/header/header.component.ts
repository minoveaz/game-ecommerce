import { Component, Output, EventEmitter  } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  faBars = faBars;
  toggledValue = true;
  @Output() toggleChange = new EventEmitter<boolean>();

  toggled(){
    if (this.toggledValue === undefined){
      this.toggledValue = true;
    }
    this.toggledValue = !this.toggledValue;
    this.toggleChange.emit(this.toggledValue);
  }

}
