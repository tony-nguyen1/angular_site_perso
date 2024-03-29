import { Component, OnInit, Input } from '@angular/core';
import { Lang } from '../lang';

import { Projet } from '../projet';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent {
  @Input() projet?: Projet; //| undefined | null = null;
  @Input() lang?: Lang[];// | undefined | null = [];
  test: string = "";
  @Input() langageFiltre: Set<string> = new Set();

  constructor() {
    // test = 
  }

  /**
   * Retourne un tableau
   * qui ne contient que les technologies utilisé par this.projet
   * @returns {nom, {surnom, url}}
   */
  getProjets(): Lang[] {
    let t: string[] = [];
    let techUtilise = new Array();

    for (let uneTechnologie of this.projet!.tech) {
      let foo = this.lang?.find(element => element.nom === uneTechnologie);
      techUtilise.push(foo);
    }
    // console.log(this.projet?.nom);
    // console.log(techUtilise);

    return techUtilise;
  }

  testClass(): String[] {
    let surnoms: String[] = [];
    this.projet?.tech.forEach(langage => {
      this.lang?.forEach(l2 => {
        if (langage == l2.nom) {
          surnoms.push(l2.surnom);
        }
      })
    });
    return surnoms;
  }
}
