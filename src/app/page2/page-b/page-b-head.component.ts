import { Component } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';


@Component({
  template:  `
        <div id="content">
          <h3>HEADER INSIDE</h3>
          <div class="outer-outlet">
            <router-outlet></router-outlet>
          </div>
        </div>
`
})
export class HeadComponent {

  constructor(private route: ActivatedRoute) {
  };
}
