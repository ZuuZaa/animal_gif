var apiKey = "c4UCMdKemf33qzUJMnURnI50YjHBmCRT"
var url = "https://api.giphy.com/v1/gifs/search?api_key=c4UCMdKemf33qzUJMnURnI50YjHBmCRT&q=&limit=25&offset=0&rating=G&lang=en"

$.ajax( {
    url,
    data: {
        q: $("my-btn").text(),
        api_key: apiKey
    }
    }).done(function (response){
          console.log(response)
    })
    
var animals = ["cat", "dog", "penquin", "rabbit", "goldenfish", "bird", "turtle", "horse", "pig", "monkey"]

for (i in animals){
    gifbtn = $("<button>").addClass("btn btn-info my-btn")
    gifbtn.text(animals[i])
    $("#btn-holder").append(gifbtn)
}
