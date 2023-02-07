import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {

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
