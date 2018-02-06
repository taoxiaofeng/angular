import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'my-home',
    template:`
    <h1 class="welcome">欢迎使用</h1>
    <div class="welcome-img">
        
    </div>
    `,
    styles:[`
    .welcome,
    .welcome-img {
        text-align: center;
    }
    `]
}) 
export class HomeComponent implements OnInit {
    private host = location.host;
    private welcome = '../assets/images/welcome.jpg';
    constructor() { }

    ngOnInit() { }
}