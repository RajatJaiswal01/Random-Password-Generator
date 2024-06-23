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
        
    return '';
}

const passwordLength=12;
const includeUppercase=true;
const includeLowercase=true;
const includeNumbers=true;
const includeSymbols=true;

const Password = GeneratePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);

console.log(`Generated password is ${Password}`);