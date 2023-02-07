import { Component } from '@angular/core';
import { Classroom } from 'src/app/model/classroom';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent {
  getById(arg0: number) {
    throw new Error('Method not implemented.');
  }
  insert(registro: Classroom) {
    throw new Error('Method not implemented.');
  }
  update(registro: Classroom) {
    throw new Error('Method not implemented.');
  }


  ngOnInit() {

    let openModalButton = document.querySelector("#open-modal");
    const closeModalButton = document.querySelector("#close-modal");
    const modal = document.querySelector("#modal");
    const fade = document.querySelector("#fade");

    const toggleModal = () => {
      modal?.classList.toggle("hide");
      fade?.classList.toggle("hide");
    };

    [openModalButton, closeModalButton, fade].forEach((el) => {
      el?.addEventListener("click", () => toggleModal());
    });

    }

}
