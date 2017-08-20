import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styles: []
})

export class PublicLayoutComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  }

}
