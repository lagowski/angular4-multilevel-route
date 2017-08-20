import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-private-layout',
  templateUrl: './private-layout.component.html',
  styles: []
})

export class PrivateLayoutComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  }

}
