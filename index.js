// code your solution here
function saturdayFun(fun = "roller-skate") {
    return `This Saturday, I want to ${fun}!`
};

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`
};

function wrapAdjective(wrap = "*"){
     return function (empathic = "special") {
        const encouragingPromptFunction = `You are ${wrap}${empathic}${wrap}!`;
  return encouragingPromptFunction
};
};