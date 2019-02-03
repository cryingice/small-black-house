function* deployObjectInterface(obj) {
    let keys = Object.keys(obj);
    for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        yield [key,obj[key]]
    }
}
const obj = {
    name:'cryingic',
    age:21
}
for (const [a,b] of deployObjectInterface(obj)) {
    console.log(a,b);
}

async function name(params) {
    let [a,b] = await getAttr();
    console.log(a,b);
    
}
function getAttr(){
    return  new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve([55,444])
      }, 1000);
    })
}