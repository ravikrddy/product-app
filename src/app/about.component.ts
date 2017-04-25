import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'about',
    templateUrl: 'about.component.html'
})

export class AboutComponent implements OnInit {
    @Input()
    title:string;

@Input()
branches:Array<string>=[];

     members:string[]=['Ravi','Monika'];
     showMembers:boolean=true;
     likes:number=0;

address: any;

    constructor() { }

    ngOnInit() { }

    showHide(){
        this.showMembers=!this.showMembers;
    }
        likeClicked(n:number){
            this.likes +=n;
        }

        addMember(name:string){
            this.members.push(name);
        }
    }
