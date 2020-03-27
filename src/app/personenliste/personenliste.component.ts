import { Component, Output, EventEmitter } from '@angular/core';
import { Person } from '../../shared/person';

@Component({
  selector: 'app-personenliste',
  templateUrl: './personenliste.component.html',
  styleUrls: ['./personenliste.component.sass']
})
export class PersonenlisteComponent {
  @Output() personenChange = new EventEmitter();

  currentPerson = new Person();
  personen: { [key: number]: Person } = {};

  editmode = false;
  id_counter = 0;
  addPerson() {
    if (this.currentPerson.valid()) {
      if (!this.editmode) {
        // Person an id_counter stelle schreiben und hochzählen
        this.personen[this.id_counter++] = this.currentPerson;
      } else {
        this.editmode = false;
      }

      // emit changes
      this.personenChange.emit(this.personen);

      this.currentPerson = new Person();

      // reset the validation by removing error classes
      ['nameF', 'surNameF', 'ageF'].forEach(id => {
        setTimeout(() => {
          document.getElementById(id).classList.remove('mat-form-field-invalid')
        }, 0); // wtf obor schunscht geats net
      });
    }
  }

  editPerson(id: number) {
    this.currentPerson = this.personen[id];
    this.editmode = true;
  }
  
  removePerson(id: string) {
    delete this.personen[id];
  }
}
