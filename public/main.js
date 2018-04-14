console.log("linked js")
//what is this doing from cats example... like documetn on ready? -- wasnt working right without....
$(function(){
//form handler for add new burger
$("#addBurger").on("submit", function(event){
    event.preventDefault()
    console.log("on submit add burger working")

    var newBurger = {
        burger: $("#newBurger").val(),
        devoured:false
    }
    console.log(newBurger)//in browser

    //send post request to add newBurger data to db
    $.post("/api/burgers",newBurger, function(data){
        location.reload()
    })

    
})

})//closes $function thing

// $("#addMovie").on("submit", function (event) {
//     event.preventDefault()

//     console.log("onclick add movie")

//     var newMovie = {
//         //grab value of user input where id = newMovie
//         //why is this in an object? 
//         movie: $("#addMovie [name=movie]").val()
//     }
//     console.log(newMovie)
//     $.post("/movies", newMovie, function (data) {
//         //alert user movie was added
//         alert("You added " + newMovie.movie + " to your watchlist")
//         //reload page so user can see movie was added
//         location.reload()
//     })
// })