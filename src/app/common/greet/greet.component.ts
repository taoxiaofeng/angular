import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-greet',
    template: `
    <div style="border:1px solid #666; margin:4px;">
        <div style="border:1px solid red; margin:5px;">
            <ng-content select="header"></ng-content>
        </div>
        <div style="border:1px solid green; margin:5px;">
            <ng-content select=".card_body"></ng-content>
        </div>
        <div style="border:1px solid blue; margin:5px;">
            <ng-content select="footer"></ng-content>
        </div>
    </div>`,
    styles: [`.border { border: 2px solid #eee;}`]
})
export class GreetComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
