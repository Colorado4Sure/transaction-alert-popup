toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: "toast-bottom-left",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

fetch("alerts.json")
  .then((response) => response.json())
  .then((data) => {
    var time = Math.floor(Math.random() * (12000 - 2000 + 2)) + 2000;
    let newData = data[Math.floor(Math.random() * (data.length - 1)) + 1];

    setInterval(() => {
      time = Math.floor(Math.random() * (12000 - 2000 + 2)) + 2000;
      setTimeout(() => {
        newData = data[Math.floor(Math.random() * (data.length - 1)) + 1];
        toastr[newData.boolean === true ? "success" : "error"](
          `${newData.boolean === true ? "+" : "-"} ${newData.currency} ${
            newData.boolean === true ? "[New Payment] " : "[New Withdrawal] "
          } by ${newData.email}
        `
        );
      }, time);
      //   var time = Math.floor(Math.random() * (14000 - 1000)) + 1000;
    }, time);
  })
  .catch((err) => console.error(err));
