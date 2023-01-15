function checkform(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if(username == "admin" && password == "admin"){
        alert("Login Berhasil");
        form.setAttribute("action", "dataMasjid.html");
    }
    else if(username == "" && password == ""){
        alert("Tolong Isi Username & Password Anda!");
    }
    else if(username == ""){
        alert("form  username tidak boleh kosong");
    }
    else if(password == ""){
        alert("form password tidak boleh kosong");
    }
    else{
        alert("Username/Password yang Anda Masukkan Salah")
    }
}