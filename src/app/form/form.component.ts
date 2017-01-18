import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  customInput = "parikh";

  constructor() { }

  ngOnInit() {
  }

  onClick(tushar){
    console.log(tushar);
    this.customInput = tushar + "test";
  }

}
