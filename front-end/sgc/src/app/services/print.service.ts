import { jsPDF } from 'jspdf';
import { Injectable } from '@angular/core';
import autoTable from 'jspdf-autotable';
@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor() { }
  print(header: string[], body:Array<any>, title: string, save?:boolean){
    let doc = new jsPDF({
      orientation: 'p',
      unit: 'px',
      format: 'letter'
    })

    // autoTable(doc, {html: 'exemplo'} )

    autoTable(doc, {
      head: [header],
      body: [body],
    })

    doc.text(title, doc.internal.pageSize.width / 2, 25, {align: 'center'});
    if(save) {
      let hoy = new Date();
      doc.save(hoy.getDate() + hoy.getMonth() + hoy.getFullYear() + hoy.getTime() + '.pdf');
    }else{

    }
  }
}
