import { Injectable } from '@angular/core';

import { Projet } from "./projet";
import { PROJETS } from "./mock-projets";

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor() { }

  getProjets(): Projet[] {
    return PROJETS;
  }
}
