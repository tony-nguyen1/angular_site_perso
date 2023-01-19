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
  lang: Lang[] = []
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
    console.log(newItem);
    this.current = newItem;
  }
}
