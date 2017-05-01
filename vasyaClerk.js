// Counting the amount of money he holds is not enough - you need to keep track of the count of the bills.

// For example, if you have one $100 bill, you cannot make change for someone with a $50 or $100 bill, you need the specific bill (the $25 bill to make change for $50, 
// and $25 and $50 OR three $25 bills to make change for the $100 bill).

// So rather than keep a total money collected, keep track of the number of bills collected.

function tickets(peopleInLine){
  // ...

var twentyFive = [];
var fifty = [];
var hundert = [];
var ticketCost = 25;
sold = true;

for (var i = 0; i < peopleInLine.length; i++) {
    
    if (peopleInLine[i] === ticketCost) {
        twentyFive.push(peopleInLine[i]);
    }

    else if (peopleInLine[i] === 50) {
        if (twentyFive.length > 0) {
            twentyFive.pop();
            fifty.push(peopleInLine[i]);
        } else {
            sold = false;
            break;
        }
    }

    else if (peopleInLine[i] === 100) {
        if (fifty.length > 0 && twentyFive.length > 0) {
            fifty.pop();
            twentyFive.pop();
            hundert.push(peopleInLine[i]);
        }
        else if (twentyFive.length >= 3) {
            //strats at 3rd element from the end, removes 3 elements (75 usd)
            twentyFive.splice(twentyFive.length - 3, 3);
        } else {
            sold = false;
            break;
        }
    }
    
    
 }
if (sold) {
        return "YES";
    } 
    return "NO";

//   var change = 0;
//   var ticketCost = 25;
//   var sold = true;
//   for (var i = 0; i < peopleInLine.length; i++) {
      
      
//       if (peopleInLine[i] - ticketCost > change) {
//           sold = false;
//       } else {
//           change += peopleInLine[i];
//       }

//       if (peopleInLine[i] > ticketCost) {
//           change -= peopleInLine[i] - ticketCost;
//       }
      
      
//   }
  
  
//   if (sold) {
//       return "YES";
//   } else {
//       return "NO";
//   }
}
console.log(tickets([25,25,50,100,25,25,50,100,25,25,25,100,25,25,25,100,100,50]));

