const name="vardhman-jain-god"
const age=57
// console.log(name+age+"ragav")
console.log(`hello my name is ${name} and my repo count is ${age}`)
const gameName=new String (`vardhman-jain-god`)
console.log(gameName[0])
console.log(gameName.__proto__)

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('a'));

const newStr=gameName.slice(-6,6)
console.log(newStr);

const anoStr=gameName.substring(0,7)
console.log(anoStr);

const newStrOne="        fsdfsd     "
console.log(newStrOne.trim());

const url="https://yoyo.com/yoyo%20sdfsd"
console.log(url.replace('%20','-'));
console.log(url.includes('yoyo'));
console.log(url.includes('yoyi'));

console.log(gameName.split('-'))

