const regBtn = document.getElementById("regBtn");
const regSide = document.getElementById("reg");
const loginSide = document.getElementById("login");
const isShowing = false;
regBtn.addEventListener("click", () => {
    const isShowing = false;
    if (!isShowing) {
        regSide.style.display = "flex";
        loginSide.style.display = "none";
        isShowing != isShowing;
    }
});
document.getElementById("AlrdBtn").addEventListener("click", () => {
    regSide.style.display = "none";
    loginSide.style.display = "flex";
    isShowing != isShowing;
});

const registerBtn = document.getElementById("registerBtn");


function register() {
    const name = document.querySelector(".userName").value;
    const email = document.querySelector(".email").value;
    const pswrd = document.querySelector(".crPassword").value;
    const cfrmPswrd = document.querySelector(".cfrmPassword").value;
    const pswrdCheck = document.querySelector("#psdStrength");

    const regex = /(?=.*[0-9])(?=.*[$&@])/;
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
        alert("Name must contain only letters and spaces");
        pswrdCheck.textContent = "Name must contain only letters and spaces";
        return;
    }
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        pswrdCheck.textContent = "Please enter a valid email address";
        return;
    }

    if(pswrd.length < 8){
        alert("Password must be at least 8 characters");
        pswrdCheck.textContent = "Password must be at least 8 characters";
        return;
    }

    if (pswrd != cfrmPswrd) {
        alert("Your Password should be same!");
        pswrdCheck.textContent = "Your Password should be same!";
        return;

    }

    if (!regex.test(cfrmPswrd)) {
        alert("Paswword must contain $/&/@ and numbers");
        pswrdCheck.textContent = "Paswword must contain $/&/@ and numbers";
        return;
    }

    


if (cfrmPswrd.length >= 8) {
    let names = JSON.parse(localStorage.getItem("names")) || [];
    let emails = JSON.parse(localStorage.getItem("emails")) || [];
    let passwords = JSON.parse(localStorage.getItem("passwords")) || [];
    let accountNumbers = JSON.parse(localStorage.getItem("accountNumbers")) || [];
    let balances = JSON.parse(localStorage.getItem("balances")) || [];

    names.push(name);
    emails.push(email);
    passwords.push(pswrd);

    localStorage.setItem("names", JSON.stringify(names));
    localStorage.setItem("emails", JSON.stringify(emails));
    localStorage.setItem("passwords", JSON.stringify(passwords));

    let accountNumber = Math.floor(Math.random() * 1000000000000000)
    //console.log("acc no: ", accountNumber);

    let balance = Math.floor(Math.random() * 5000);
    //console.log("balance: ", balance);

    balances.push(balance);
    localStorage.setItem("balances", JSON.stringify(balances));

    accountNumbers.push(accountNumber);
    localStorage.setItem("accountNumbers", JSON.stringify(accountNumbers));
    alert("Registered Successfully");
    location.reload();
}
else {
    alert("Enter Required data")
}
};


registerBtn.addEventListener("click", register);

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
    const email = document.querySelector(".loginEmail").value;
    const pswrd = document.querySelector(".loginPassword").value;

    

    const storedEmail = JSON.parse(localStorage.getItem("emails"));
    const storedPswrd = JSON.parse(localStorage.getItem("passwords"));

    for (let i = 0; i < storedEmail.length; i++) {



        if (email == storedEmail[i] && pswrd == storedPswrd[i]) {
            alert("You are logged in successfully");
            index = i;
            localStorage.setItem("index", index);
            let time=JSON.parse(localStorage.getItem("loginTimes")) || [];
            time.push(new Date());
            localStorage.setItem("loginTimes", JSON.stringify(time));
            
            console.log("time uploaded")
            
            location.reload();
            window.location.href = "index.html";
            
            
            return;
        }
        else if (!storedEmail.includes(email) && !storedPswrd.includes(pswrd)) {
            alert("User account or password not found");
            return;
            
        }
        else{
            alert("Invalid credentials")
            return;
        }


    }


});






           








