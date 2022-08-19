import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-component',
  templateUrl: './photo-component.component.html',
  styleUrls: ['./photo-component.component.css']
})
export class PhotoComponentComponent implements OnInit {

  @Input() description='';
  @Input() url='';

  constructor() { }

  ngOnInit(): void {
  }

}
