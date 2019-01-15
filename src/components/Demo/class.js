class test{
  static run(){
    console.log(this,'woshi run里面的this');
  }
  static arrow(){
    console.log(this,'woshi arrow里面的this');
    this.run();
    return this
  }
}
console.log('hahah');
class test2 extends test{
  constructor(){
    super();
  }
}
let init = new test2();
// init.run();
test2.run();
// test.arrow();

// console.log(init.arrow() === test);


