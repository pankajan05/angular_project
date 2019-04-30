import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 loadedEvent='';

 featureSelect(feature: string) {
   this.loadedEvent = feature;
 }
}
