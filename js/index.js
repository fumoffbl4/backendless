$(function () {
  $("input[name=theme-radio]").on("change", changeSelect);
  $("input[name=theme-radio]").on("change", changeTheme);

  $("select").on("change", changeRadio);
  $("select").on("change", changeTheme);

  $("button").on("click", changeSelect);
  $("button").on("click", changeRadio);
  $("button").on("click", changeTheme);

  $("img").on("click", function () {
    $("body").append(
      '<div class="modal">' +
        '<img src="' +
        $(this).attr("src") +
        '" alt="' +
        $(this).attr("alt") +
        '" />' +
        '<p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate beatae nisi atque libero earum nostrum eveniet nulla ratione in porro.</p>"' +
        '<i class="fas fa-times"></i>' +
        "</div>"
    ).addClass('overflow');

    $(".modal").on("click", function (event) {
      if ($(event.target).hasClass("modal") || $('i')) {
        $(this).remove();
        $("body").removeClass('overflow');
      }
    });

  });

  function changeTheme() {
    $("body").removeClass().addClass($(this).val());
  }

  function changeSelect() {
    $("select").val($(this).val());
  }

  function changeRadio() {
    $('input[name=theme-radio][value="' + $(this).val() + '"]').prop(
      "checked",
      true
    );
  }
});
