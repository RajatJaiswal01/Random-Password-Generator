//RANDOM PASSWORD GENERATOR

function GeneratePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols){
    
    const LowercaseChars="abcdefghijklmnopqrstuvwxyz";
    const UppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const NumberChars="0123456789";
    const SymbolChars="~!@#$%^&*()_-+=";

    let allowedChars="";
    let password="";

    allowedChars+=includeUppercase ? UppercaseChars : "";
    allowedChars+=includeLowercase ? LowercaseChars : "";
    allowedChars+=includeNumbers ? NumberChars : "";
    allowedChars+=includeSymbols ? SymbolChars : "";

    if(passwordLength<=0){
        return `(password length must be at least one)`;
    }

    if(allowedChars.length==0){
        return `(At least select one set of characters)`;
    }

    for(let i=0;i<passwordLength;i++){
        const RandomIndex = Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[RandomIndex];
    }

    return password;
}

const passwordLength=4;
const includeUppercase=true;
const includeLowercase=true;
const includeNumbers=true;
const includeSymbols=true;

const Password = GeneratePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);

console.log(`Generated password is ${Password}`);