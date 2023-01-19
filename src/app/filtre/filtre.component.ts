import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Lang } from "../lang";
import { LangService } from "../lang.service";

@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.scss']
})
export class FiltreComponent {
  @Input() lang?: Lang[];
  @Output() newItemEvent = new EventEmitter<Set<string>>();

  set: Set<string> = new Set();

  show(): void {
    // console.log(this.set);
    this.addNewItem("test");
  }
  addNewItem(value: string) {
    this.newItemEvent.emit(this.set);
  }

}
