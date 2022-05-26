import {TSubstation} from "./SCL_Substation";


const a = new TSubstation({});

console.log(
  a.Elements()[0].name
)

//todo:
// надо подумать как делать получение методов и атрибутов
// static - ?
// public of object
//
// 2. это строка или целиком клас