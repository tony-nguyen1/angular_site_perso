import { Component, OnInit } from '@angular/core';

import { Projet } from '../projet';
import { ProjetService } from "../projet.service";
import { Lang } from "../lang";
import { LangService } from "../lang.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projets: Projet[] = [];
  // TOUT les langages
  lang: Lang[] = []

  // Les noms des langages à filtrer (ceux qu'on veux voir)
  current: Set<string> = new Set();
  // langFilt=

  constructor(private projetService: ProjetService, private langService: LangService) { }

  ngOnInit(): void {
    this.getProjets();
    this.getLang();

  }

  getProjets(): void {
    this.projets = this.projetService.getProjets();
  }

  getLang(): void {
    this.lang = this.langService.getLang();
  }

  showME(newItem: Set<string>) {
    // console.log(newItem);
    this.current = newItem;
  }

  /* Returns True if this.lang has at least one element thas is inside the set of langage to filter this.current */
  showAProject(p: Projet): boolean {
    console.log(p.tech);
    console.log(this.current);
    let b = p.tech.some((elem) => this.current.has(elem));
    console.log(b);
    return b;
  }
}
