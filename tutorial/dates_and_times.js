// Date object
let val;
const today = new Date();
let birthday = new Date('9-10-1981 11:25:03');
birthday = new Date('September 10 1981 11:25:03');

val = today;
val = birthday;

val = birthday.getMonth(); // 8 >> 0 based
val = birthday.getDate(); // 10
val = today.getDay(); // Day of week
val = birthday.getFullYear();
val = birthday.getHours();
val = today.getSeconds();
val = today.getTime();

birthday.setDate(12);
birthday.setMonth(11);
birthday.setHours(13);

val = birthday;

console.log(val);
