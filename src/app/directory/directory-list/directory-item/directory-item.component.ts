import { Directory } from './../../directory.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-directory-item',
  templateUrl: './directory-item.component.html',
  styleUrls: ['./directory-item.component.css']
})
export class DirectoryItemComponent implements OnInit {
  @Input() directory: Directory;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
