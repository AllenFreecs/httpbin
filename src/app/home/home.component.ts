import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss'

]
})
export class HomeComponent implements OnInit {
  CodingSkill:string = "Your coding skill";
  CodingSkillCount:number = 0;
  Skills = [];




  constructor() { }

  ngOnInit() {
  }
  
  AddSkill()
  {
   if (this.CodingSkill)
   { 
   this.Skills.push(this.CodingSkill);
   this.CodingSkillCount = this.Skills.length;
   }
  }
  
  RemoveSkill(i)
  {
    this.Skills.splice(i,1)
    this.CodingSkillCount = this.Skills.length;
  }


}
