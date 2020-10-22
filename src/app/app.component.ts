import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ng-daterangepicker';
  @ViewChild('tpl') tpl: TemplateRef<any>

  constructor(
    private _vcr: ViewContainerRef
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._vcr.createEmbeddedView(this.tpl)
  }
}
