import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'vs-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() text = 'Loading...';

  constructor() { }

  ngOnInit(): void {
  }

}
