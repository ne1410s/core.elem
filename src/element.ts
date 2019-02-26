/// <reference path="../node_modules/@types/node/fs.d.ts" />

//import { readFileSync } from 'fs';

abstract class CustomisableBase extends HTMLElement {
  
    get html(): string {
        return "";
    };

    get css(): string {
        return "*:not(.fml) { display: none }";
    }

    constructor() {
        super();
        
        this.init();
    }

    private init(): void {
        
        const elem_shadow = this.attachShadow({ mode: 'closed' }),
              elem_style = document.createElement('style');

        elem_style.innerHTML = this.css;
        elem_shadow.innerHTML = this.html;

        elem_shadow.prepend(elem_style);
    }
}