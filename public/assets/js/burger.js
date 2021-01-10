//Create on-click, submit, and delete events using ajax //
$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger")
                .val()
                .trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added new burger");
            location.reload();
        });
    });

    $(".eatburger").on("click", function(event) {
        event.preventDefault();

        console.log("*******event listenr for put route hooking");

        var id = $(this).data("id");
        var devouredBurger = {
            devoured: 1
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(function() {
            console.log("You Devoured the Burger!!!!!!!!");
            location.reload();
        });
    });
    $(".trashburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });
});