import Swal from "sweetalert2";
export const handleAlertSuccess = (data) => {
  Swal.fire({
    icon: "success",
    title: "Success",
    showCancelButton: true,
    confirmButtonText: "View Status",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      handleAlerShowResponse(data);
    }
  });
};

export const handleAlerShowResponse = (data) => {
  Swal.fire({
    icon: "success",
    title: "Success",
    html: `Your mint: <b>${JSON.stringify(data)}</b>, `,
  });
};

export const handleAlertLoading = () => {
  Swal.fire({
    title: "...please wait",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
};
export const handleAlertError = () => {
  Swal.fire({
    icon: "error",
    title: "Oops... , lo sentimos",
    text: "intentalo de nuevo",
    allowOutsideClick: false,
  }).then((response) => {
    if (response.isConfirmed) {
      window.location.reload();
    }
  });
};

export const handleAlertInfo = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    iconColor: "#fcd34d",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    background: "#1e1c1d",
    color: "#f4f4f4",
  });
  Toast.fire({
    icon: "info",
    title: "Type: duplicated",
  });
};

export const handleAlertErrorData = (title) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    iconColor: "#fcd34d",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    background: "#1e1c1d",
    color: "#f4f4f4",
  });
  Toast.fire({
    icon: "error",
    title,
  });
};
