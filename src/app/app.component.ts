import { Component } from '@angular/core';
import { Person } from 'src/shared/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  personen: { [key: number]: Person } = {};

  updatePerson(newPersonen) {
    this.personen = newPersonen;
  }
}
