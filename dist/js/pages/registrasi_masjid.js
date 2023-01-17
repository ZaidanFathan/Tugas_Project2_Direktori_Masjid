let error_alert = document.getElementById("error_alert");
const NamaMasjid = document.getElementById("NamaMasjid");
const AlamatWeb = document.getElementById("AlamatWeb");
const latitude_longitude = document.getElementById("latitude_longitude");
const Deskripsi = document.getElementById("Deskripsi");
const Pengurus = document.getElementById("Pengurus");
const email = document.getElementById("email");

let modalBody = document.querySelectorAll(".modal-body");

function ValidationEmail(email) {
  if (email !== "") {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    const div = document.createElement("div");
    div.className = "alert alert-danger";
    div.setAttribute("id", "divMessage");
    div.role = "alert";
    const p = document.createElement("p");
    const text = document.createTextNode(
      `Anda memasukkan format alamat email yang tidak valid!`
    );

    p.appendChild(text);
    p.setAttribute("id", "pesan");
    div.appendChild(p);
    error_alert.appendChild(div);

    return false;
  }
}

function Daftar(event) {
  event.preventDefault();
  const message = document.querySelectorAll("#pesan");
  const divMessage = document.querySelectorAll("#divMessage");
  const hasil = document.querySelectorAll(".result");
  const modalContent = document.querySelectorAll(".modal-body p");
  const Konfirmasi = document.getElementById("konfirmasi");

  let err = [];

  if (!NamaMasjid.value) err.push(NamaMasjid.id);
  if (!latitude_longitude.value) err.push(latitude_longitude.id);
  if (!Deskripsi.value) err.push(Deskripsi.id);
  if (!Pengurus.value) err.push(Pengurus.id);
  if (!email.value) err.push(email.id);
  if (!AlamatWeb.value) err.push(AlamatWeb.id);

  message.forEach((element) => {
    element.remove();
  });

  divMessage.forEach((element) => {
    element.remove();
  });

  if (err.length > 0) {
    ValidationEmail(email.value);
    err.forEach((element) => {
      const div = document.createElement("div");
      div.className = "alert alert-danger";
      div.setAttribute("id", "divMessage");
      div.role = "alert";
      const p = document.createElement("p");
      const text = document.createTextNode(
        `Inputan ${element} Tidak boleh Kosong`
      );

      p.appendChild(text);
      p.setAttribute("id", "pesan");
      div.appendChild(p);
      error_alert.appendChild(div);
      error_alert.style.display = "block";
    });
  } else {
    event.preventDefault();
    modalContent.forEach((element) => {
      element.remove();
    });

    if (ValidationEmail(email.value)) {
      hasil.forEach((element) => {
        sessionStorage.setItem(element.id, element.value);
        const p = document.createElement("p");
        const text = document.createTextNode(
          `${element.id} : ${element.value}`
        );
        p.appendChild(text);
        modalBody[0].appendChild(p);
      });

      Konfirmasi.setAttribute("data-bs-toggle", "modal");
      Konfirmasi.click();
      Konfirmasi.setAttribute("data-bs-toggle", "");
      error_alert.style.display = "none";
    } else {
      error_alert.style.display = "block";
    }
  }
}
