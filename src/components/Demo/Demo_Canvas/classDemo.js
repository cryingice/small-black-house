class Test{
  constructor(name){
    this.name = name;
  }
  getName(){
    console.log(this.name);
  }
}

const test = new Test('woshi');
test.getName();