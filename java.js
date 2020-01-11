window.addEventListener('load', function() {
    var length = prompt("Please choose password length between 8-128 characters.");
  
    while (length < 8 || length > 128) {
      length = prompt("Please choose a number between 8-128!!");
    }
    var symChar = confirm("Do you want to use symbols?");
    var numChar = confirm("Do you want to use numbers?");
    var lowChar = confirm("Do you want to use lowercase letters?");
    var uppChar = confirm("Do you want to use uppercase letters?");
    

    while (!(uppChar || lowChar || numChar || symChar)) {
      alert("Choose at least one criteria!!");
  
      symChar = confirm("Do you want to use symbols?");
      numChar = confirm("Do you want to use numbers?");
      lowChar = confirm("Do you want to use lowercase letters?");
      uppChar = confirm("Do you want to use uppercase letters?");
      
    }
  
    const results = document.getElementById('password');
  
    document.getElementById('generate').addEventListener('click', () => {
      results.value = genPassword(lowChar, uppChar, numChar, symChar, length);
    });
  

  
      if (!password) {
        return;
      }
  
      
  });
  
  
  const randFun = {
    symbol: randSym,
    number: randNum,
    lower: randLow,
    upper: randUpp
  
  };
  
  function genPassword(lower, upper, number, symbol, length) {
    let generatedPass = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{
      lower
    }, {
      upper
    }, {
      number
    }, {
      symbol
    }].filter(item => Object.values(item)[0]);
  
   
    for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatedPass += randFun[funcName]();
      });
    }
  
    const finalPassword = generatedPass.slice(0, length);
  
    return finalPassword;
  }

  function randLow() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randUpp() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randNum() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randSym() {
	const symbols = '!@#$%^&*'
	return symbols[Math.floor(Math.random() * symbols.length)];
}