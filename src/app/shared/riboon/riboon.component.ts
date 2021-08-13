import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-riboon',
  templateUrl: './riboon.component.html',
  styleUrls: ['./riboon.component.css']
})
export class RiboonComponent implements OnInit {

  @input()folder:string="";
  @input()title:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
