$("body").on("click", ".seat", function () {
  if (!$(this).hasClass("unavailable")) {
    let seat = $(this).attr("id").split("group-")[1].toUpperCase();

    if (purchaseData.ticketTypeIds.length == 0) {
      alert("Please add tickets to your order before selecting seats.");
      return false;
    }

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");

      selectedSeats.splice(selectedSeats.indexOf(seat), 1);
    } else {
      if (selectedSeats.length == purchaseData.ticketTypeIds.length) {
        alert("You've selected the total number of available seats.");
        return false;
      }

      $(this).addClass("active");

      selectedSeats.push(seat);
    }

    $("#selected-seats-label").text(makeTicketDescriptionString());
  }
});
