// Your code here
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(symbol = '*') {
  return function (msg = 'special') {
    return `You are ${symbol}${msg}${symbol}!`;
  };
}

wrapAdjective('*', 'a hard worker')();
wrapAdjective('||', 'a dedicated programmer');

//('*')('a hard worker');
//wrapAdjective('||')('a dedicated programmer');
