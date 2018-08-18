import { Directive, HostBinding, HostListener } from '@angular/core';
import { log } from 'util';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDiretive {
  @HostBinding('class.open') isOpen = false;
  
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;

  }
}
