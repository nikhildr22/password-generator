const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function validateIfNumber(){
    return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57;
}
function generatePasswords(){
    let passwordLength = parseInt(document.getElementById("passwordLength").value)
    if(passwordLength<1 || passwordLength>500){
        alert("Too short or long password length!!")
        document.getElementById("passwordLength").value = 8
    }
    else{
        let passField1 = document.getElementById("passwordField-1")
        let passField2 = document.getElementById("passwordField-2")
        passField1.value = GetRandomPassword(passwordLength);
        passField2.value = GetRandomPassword(passwordLength);
    }
    
    //console.log(passwordLength)
    
    
}

function GetRandomPassword(size){
    let password = "";
    for(let i=0;i<size;i++){
        let randomIndex = Math.floor(Math.random()*characters.length);
        password+=characters[randomIndex];
        
    }
    
    return password;
}



