function cal(passwordLen,hasuppercaseletters,haslowercaseletters,hasnumbers,hassymbols){
    const uppercaseletters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseletters="abcdefghijklmnopqrstuvwxyz";
    const numbers="0123456789";
    const symbols="!@#$%^&*()_+-=";
    let all="";
    let passwo="";
    all+=hasuppercaseletters?uppercaseletters : "";
    all+=haslowercaseletters?lowercaseletters : "";
    all+=hasnumbers?numbers : "";
    all+=hassymbols?symbols : "";

    for(let i=0;i<passwordLen;i++){
        let random=Math.floor(Math.random()*all.length);
        passwo+=all[random];
    }
    return passwo;
}

let uname;
let passwordLen;
let hasuppercaseletters;
let haslowercaseletters;
let hasnumbers;
let hassymbols;
document.getElementById("myb").onclick=function(e){
    e.preventDefault();
    hasuppercaseletters=document.getElementById("kk").checked;
    haslowercaseletters=document.getElementById("kk1").checked;
    hasnumbers=document.getElementById("kk2").checked;
    hassymbols=document.getElementById("kk3").checked;
    uname=document.getElementById("myi").value;
    console.log(uname);
    passwordLen=document.getElementById("myin").value;
    passwordLen=Number(passwordLen);
    console.log(passwordLen);
    let code=cal(passwordLen,hasuppercaseletters,haslowercaseletters,hasnumbers,hassymbols);
    console.log(code);
    document.getElementById("mypnm").textContent=`${uname} the password generated is ${code}`;
}
