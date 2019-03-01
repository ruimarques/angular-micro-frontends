import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  appsConfig = {
    'client-a': {
      element: 'app-client-a'
    }
  };

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log('loader oninit');

    // Basically catch the path after 'microapps/' (micro apps root)
    // to identify the microapp we want to load
    this.activatedRoute.url.pipe(take(1)).subscribe((url: UrlSegment[]) => {
      const config = this.appsConfig[url.length && url[0].path];

      console.log('loader config: ', config);

      if (config) {
        const content = document.getElementById('microapp-container');
        const element = document.createElement(config.element) as any;

        element.guid = 'some-param';

        content.appendChild(element);
      }
    });
  }
}
