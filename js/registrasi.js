function validasi() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let password2 = document.getElementById("cek_password").value;

  if (name != "" && email!="" && username !="" && password !="" && password2 == password){
    alert("anda berhasil registrasi");
    form.setAttribute("action", "adminDaftarMasjid.html");
  }
  else{
    alert('Anda harus mengisi data dengan lengkap & benar!');
  }
}