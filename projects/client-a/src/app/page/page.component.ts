import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  guid: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.guid = this.activatedRoute.snapshot.paramMap.get('guid');
  }
}
