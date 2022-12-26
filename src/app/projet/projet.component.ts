import { Component, OnInit, Input } from '@angular/core';

import { Projet } from '../projet';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent {
  @Input() projet?: Projet;
}
