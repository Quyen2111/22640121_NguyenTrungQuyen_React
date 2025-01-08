console.log('Code challenge 4');
function calculateTip(bill) {
    const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
    
    const total = bill + tip;
    
    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`);
  }
  

  calculateTip(275);  
  calculateTip(40);   
  calculateTip(430);  