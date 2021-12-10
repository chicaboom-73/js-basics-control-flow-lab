function scuberGreetingForFeet(n){
  // Write your code here!
  

  if (n<=400){
    return "This one is on me!";
  }
  else if (n>2000 && n<=2500){
    return "I will gladly take your thirty bucks.";
  }
  else if(n>2500){
    return "No can do.";
  }
  
}

function ternaryCheckCity(city){
  // Write your code here!
 if (city === 'NYC'){
   return "Ok, sounds good.";
 }
 else {
   return"No go.";
 }
  
}

function switchOnCharmFromTip(string){
  switch (string){
    case "generous":
      return "Thank you so much.";
      
    case "not as generous":
      return"Thank you.";
      
    case "thanks for everything":
      return"Bye.";
      
  }
}