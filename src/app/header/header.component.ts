import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector:'app-header',
  templateUrl:'./header.component.html'
})
export class HeaderComponent {
  @Output() feature = new EventEmitter<string>();

  onClick(type: string) {
    this.feature.emit(type);
  }
}
