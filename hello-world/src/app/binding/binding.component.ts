import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  public name = "Shanuka";
  public siteUrl = window.location.href;

  greetUser() {
    return "Hello " + this.name; 
  }
}
