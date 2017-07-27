export class Project {
  private name : string;
  private headcount : number;
  private price : number;
  private start : string;
  private end : string;

  public constructor(name: string, headcount: number, price: number, start: string, end: string){
    this.name = name;
    this.headcount = headcount;
    this.price = price;
    this.start = start;
    this.end = end;
  }
};