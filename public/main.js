console.log("linked js")
//what is this doing from cats example... like documetn on ready? -- wasnt working right without....
$(function () {
    //form handler for add new burger
    $("#addBurger").on("submit", function (event) {
        event.preventDefault()
        console.log("on submit add burger working")

        var newBurger = {
            burger: $("#newBurger").val(),
            devoured: false
        }
        console.log(newBurger)//in browser

        //send post request to add newBurger data to db
        $.post("/api/burgers", newBurger, function (data) {
            location.reload()
        })

    })//closes add burger

    //click handler for eat me button
    $(".eat").on("click", function (event) {
        event.preventDefault()
        console.log("eat me working")
        var id = $(this).attr("id")
        var devouredState = $(this).attr("data-devoured")
        console.log(id)
        devouredState = true
        console.log(devouredState)
        var newState = {
            devoured: devouredState
        }

        $.ajax("/api/burgers/" + id,
            {
                type: "PUT",
                data: newState
            }).then(function(){
                location.reload()
            })

    })

})//closes $function thing
