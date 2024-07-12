require('./helpers.js');

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
console.log('saturdayFun:', saturdayFun);


function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};


function wrapAdjective(wrapper) {
  return function(adjective) {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}


