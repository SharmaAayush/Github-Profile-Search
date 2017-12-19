import { Component } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [GithubService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitProfileSearch';
}
