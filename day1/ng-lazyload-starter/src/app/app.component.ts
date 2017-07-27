import { Component, OnInit } from '@angular/core';

export class Project {
  name : string;
  headcount : number;
  price : number;
  start : string;
  end : string;

  public constructor(name: string, headcount: number, price: number, start: string, end: string){
    this.name = name;
    this.headcount = headcount;
    this.price = price;
    this.start = start;
    this.end = end;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//let project1 = new Project('HKAM', 30, 1000000, '2015-01-01', '2016-01-01');
//let projects = [project1];
//let project1 = new Project('HKAM',30,1000,'2016-01-01','2017-01-01');
//let project2 = new Project('SFA',30,1000,'2016-01-01','2017-01-01');
//let myprojects = [project1, project2];

export class AppComponent {
  title = 'app';
  //projects = [project1];
  //project=['HKAM','RCS','SFA','PAMB'];
  //projects = new Project('HKAM',30,1000,'2016-01-01','2017-01-01');
  //project1 : Project = new Project('HKAM',30,1000,'2016-01-01','2017-01-01');
  projects : Array<any> = [
    new Project('HKAM',30,1000,'2016-01-01','2017-01-01'),
    new Project('SFA',25,500,'2016-09-01','2020-01-01'),
    new Project('PBTB',20,800,'2016-03-01','2017-01-01'),
  ]
  sortByscending(){
    this.projects.sort(function(a:Project,b:Project){
      return a.price - b.price;
    })
  }

  sortByDescending(){
    this.projects.sort(function(a,b){
      return b.price - a.price;
    })
  }

  sortByRandom(){
    this.projects.sort(function(a,b){
      return Math.random() * a.index - Math.random() * b.index;
    })
  }
}
