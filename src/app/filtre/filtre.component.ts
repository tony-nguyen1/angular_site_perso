import { Component, Input } from '@angular/core';

import { Lang } from "../lang";
import { LangService } from "../lang.service";

@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.scss']
})
export class FiltreComponent {
  @Input() lang?: Lang[];

  set: Set<string> = new Set();

  show(): void {
    console.log(this.set);
  }
}
