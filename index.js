function scuberGreetingForFeet(distance){
  let value;
  {if (distance <= 400)
    value = 'This one is on me!'
  else if (distance >= 400 && distance <= 2000)
    value = 'That will be twenty bucks.'
  else if (distance > 2000 && distance < 2500)
    value = 'I will gladly take your thirty bucks.'
  else 
    value = 'No can do.'};
  return value
}

function ternaryCheckCity(city){
  let message;
  {message = city === 'NYC' ? 'Ok, sounds good.' : 'No go.'};
  return message;
}

function switchOnCharmFromTip(tip){
  let charm;
  switch(tip)
  {
  case 'generous':
    charm = 'Thank you so much.';
    break;
  case 'not as generous':
    charm = 'Thank you.';
    break;
  default:
    charm = 'Bye.';
    break;
  };
  return charm;

}