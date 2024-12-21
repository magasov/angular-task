import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet], // Здесь добавляем RouterOutlet
  templateUrl: './app.component.html', // Указываем путь до шаблона для AppComponent
  styleUrls: ['./app.component.css'] // Указываем путь до стилей для AppComponent
})
export class AppComponent {
  title = 'my-app';
}
