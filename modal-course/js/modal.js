$(document).ready(function() {
  var courseModal = document.getElementById("modalCourse");
  var courseModalBtn = document.getElementById("modalCourseBtn");
  var courseModalClose = document.getElementsByClassName("modal-course-close")[0];
  courseModalBtn.onclick = function(event) {
      event.preventDefault()
      courseModal.style.display = "block";
  }
  courseModalClose.onclick = function() {
      courseModal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == courseModal) {
      courseModal.style.display = "none";
    }
  }
  $(".modal-course-toggle__item").click(function () {
    $(".modal-course-toggle__item").removeClass("active");
    $(this).addClass("active");
    var courseToggle = $(this).attr("data-id");
    $(".modal-course-body").removeClass("active");
    $(courseToggle).addClass("active");
  });
});

