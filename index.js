// code your solution here
function saturdayFun(string){
string = typeof string !=="undefined" ? 'bathe my dog' : 'roller-skate';
    return `This saturday,i want to ${string}!`
}
const mondayWork= function(string){
    string=typeof string !=="undefined"? 'work from home': 'go to the office';
    return `this Monday.i will ${string}.`
}
function wrapAdjective(string){
    return function(){
        if (string=== "||"){
            return `you are ${string}a dedicated programmer ${string}!`}
            else return `you are ${string}a hard worker ${string}!`   
    }
}












