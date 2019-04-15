var animals = ["cat", "dog", "penquin", "rabbit","frog", "snake", "bird", "turtle", "horse", "pig", "monkey"]

for (i in animals){
    gifbtn = $("<button>").addClass("btn btn-info my-btn")
    gifbtn.text(animals[i])
    $("#btn-holder").append(gifbtn)
}
$(".my-btn").on("click", function() {
    $.ajax( {
        url: "https://api.giphy.com/v1/gifs/search" ,
        data: {
            q: $(this).text(),
            api_key: "c4UCMdKemf33qzUJMnURnI50YjHBmCRT",
            limit: 9
        }
        }).done(function (response){
            $("#gif-holder").empty()
              for (i=0; i<9; i++) {
                  var gifimg = $("<img>")
                  gifimg.addClass("mx-auto p-2")
                  gifimg.attr("data-move", response.data[i].images.fixed_height.url)
                  gifimg.attr("data-still", response.data[i].images.fixed_height_still.url)
                  gifimg.attr("data-condition", "still")
                  gifimg.attr("src", response.data[i].images.fixed_height_still.url)
                  $("#gif-holder").append(gifimg)
              }

        })
})

