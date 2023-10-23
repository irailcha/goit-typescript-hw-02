/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/
type Literal= 'enable' | 'disable';
let literal:Literal;
literal='enable';
literal='disable';

type Union = 'string' | 'number';
let union: Union;
union='string';
union='number';