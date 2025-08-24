import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { FieldPlusPlus } from 'src/app/shared/interfaces/field-plusplus.interface';
import { FilePlusPlus } from 'src/app/shared/interfaces/file-plusplus.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule
  ],
  providers: [HttpClient]
})
export class ListPage implements OnInit {

  formsData: FieldPlusPlus[] = [];
  url = '/assets/json/200-form.json';
  http = inject(HttpClient);
  sanitizer = inject(DomSanitizer);
  fieldsSignal: WritableSignal<FieldPlusPlus[]> = signal([]);

  constructor() { }

  ngOnInit() {
    this.http.get<FilePlusPlus>(this.url).subscribe(response => {
      console.log('RES: ', response);
      // this.formsData = response?.fields;
      this.fieldsSignal.set(response.fields);
      this.teste();
    });
  }

  teste() {
    this.fieldsSignal().forEach((field) => {
      field.sanitized_label = this.sanitizer.bypassSecurityTrustHtml(field.label);
      this.formsData.push(field);
    });
    this.fieldsSignal.set(this.formsData);
  }

}
