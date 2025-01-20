let form=document.getElementById("form");
console.log(form);

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let login_username=document.getElementById("email").value;
    let login_pwd=document.getElementById("pwd").value;
    console.log(login_username,login_pwd);
    let username=localStorage.getItem('username')
    let pwd=localStorage.getItem('password')
    console.log(username,pwd);

    if(login_username==""||login_pwd==""){
        alert("please fill the details")
    }else if(login_username!=username||login_pwd!=pwd){
        alert("username or password does not match")
    }else{
        alert("login successful")
        window.open("./home.html")
    }

})