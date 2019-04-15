var animals = ["cat", "dog", "penquin", "rabbit", "goldenfish", "bird", "turtle", "horse", "pig", "monkey"]

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
            limit: 6
        }
        }).done(function (response){
              console.log(response)
        })
})

