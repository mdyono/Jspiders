let form=document.getElementById("form");
console.log(form);

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let phone=document.getElementById("phone").value
    let pwd=document.getElementById("pwd").value
    let cpwd=document.getElementById("cpwd").value

    if(name==""||email==""||phone==""||pwd==""||cpwd==""){
        alert("Please Enter All The Fields")
    }else if(pwd!=cpwd){
        alert("Password does not matched")
    }else{
        alert("registration successful")
        console.log(name,email,phone,pwd,cpwd);
        localStorage.setItem("username",email);
        localStorage.setItem("password",pwd);
        window.open("./signin.html")
        window.location.reload()
    }

})