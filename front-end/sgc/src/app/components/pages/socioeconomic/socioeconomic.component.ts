import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-socioeconomic',
  templateUrl: './socioeconomic.component.html',
  styleUrls: ['./socioeconomic.component.css']
})
export class SocioeconomicComponent implements OnInit {

  ngOnInit(): void {
    $('#example').DataTable();
  }

}
