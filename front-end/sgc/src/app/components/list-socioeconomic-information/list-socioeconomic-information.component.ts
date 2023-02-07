import { IList } from './../../model/i-list';
import { Component, OnInit } from '@angular/core';
import { SocioeconomicInformation } from 'src/app/model/socioeconomicInformation';

@Component({
  selector: 'app-list-socioeconomic-information',
  templateUrl: './list-socioeconomic-information.component.html',
  styleUrls: ['./list-socioeconomic-information.component.css']
})
export class ListSocioeconomicInformationComponent implements OnInit, IList<SocioeconomicInformation> {
  registros: SocioeconomicInformation[] = Array<SocioeconomicInformation>();
  get(termoBusca?: string | undefined): void {
    throw new Error('Method not implemented.');
  }
  delete(id: number): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
