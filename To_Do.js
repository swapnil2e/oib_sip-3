


$(".text-box").on("keyup", function (e) {
    if (e.keyCode == 13 && $(".text-box").val() != "") {
        var task = $("<div class='task'></div>").text($(".text-box").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function () {
            var p = $(this).parent(); p.fadeOut(function () {
                p.remove();
            });
        });
        var check = $("<i class='fas fa-check'></i>").click(function () {
            var p = $(this).parent(); p.fadeOut(function () { $(".completed").append(p); p.fadeIn(); });
            $(this).remove();
        }); task.append(del, check);
        $(".notcomp").append(task); $(".text-box").val("");
    }
});
function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
};


