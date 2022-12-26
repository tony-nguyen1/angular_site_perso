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
}
