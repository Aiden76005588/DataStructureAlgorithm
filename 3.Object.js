//객체
const obj = { name: "이현규", company: "Company" };
obj["email"] = "lee@naver.com";
obj.phone = "01012345678";
console.log(obj);

delete obj.phone;
console.log(obj);

console.log("email" in obj);
console.log("phone" in obj);

Object.values(obj);
Object.keys(obj);
