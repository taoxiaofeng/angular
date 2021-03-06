import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-toolbar',
    templateUrl: './my-toolbar.component.html',
    styleUrls: ['./my-toolbar.component.css']
})
export class MyToolbarComponent implements OnInit {
    host = window.location.href;
    angularLogoImg='../../../assets/images/logo-nav@2x.png';
    @Input() selectMenu:any;
    @Input() matSidenavStatus:boolean = true;
    @Input() menus:any[] = [];
    @Output() exportMatSidenavStatus = new EventEmitter();
    @Output() exportMenu = new EventEmitter();
    constructor() { }

    ngOnInit() { }

    sidenavStatus() {
        !this.matSidenavStatus ?  this.matSidenavStatus = true : this.matSidenavStatus = false;
        this.exportMatSidenavStatus.emit(this.matSidenavStatus);
    }

    //选择一级菜单
    choose(menu:any) {
        this.selectMenu = menu;
        this.exportMenu.emit(menu);
    }
}