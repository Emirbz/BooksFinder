import { TitleService } from './services/title.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   implements OnInit {
  title: string;

  constructor(
    private titleService: TitleService,
    private cdr: ChangeDetectorRef
    ) {}

  ngOnInit() {
    this.titleService.getTitle().subscribe(appTitle =>  {
      this.title = appTitle;
      this.cdr.detectChanges();
    });

  }
}
