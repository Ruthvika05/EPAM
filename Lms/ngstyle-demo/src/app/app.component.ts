import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [CommonModule], 
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ngstyle-demo';
  bgColor = 'lightgreen';
  textColor = 'black';
  paragraph = 'This is styled using ngStyle in Angular.';
}
