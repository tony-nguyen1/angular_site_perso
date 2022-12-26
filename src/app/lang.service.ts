import { Injectable } from '@angular/core';

import { Lang } from "./lang";
import { LANG } from "./mock-lang";

@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor() { }

  getLang(): Lang[] {
    return LANG;
  }
}
