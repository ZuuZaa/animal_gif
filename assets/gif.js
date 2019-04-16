var emotions = ["happy", "sad", "impressed", "love", "upset", "suprised", "tired", "hate", "sunny", "friend", "true", "magic"]


for (i in emotions) {
    gifbtn = $("<button>").addClass("btn btn-info my-btn")
    gifbtn.text(emotions[i])
    $("#btn-holder").append(gifbtn)
}

function clickButton() {
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search",
        data: {
            q: $(this).text(),
            api_key: "c4UCMdKemf33qzUJMnURnI50YjHBmCRT",
            limit: 9
        }
    }).done(function (response) {
        $("#gif-holder").empty()
        for (i = 0; i < 9; i++) {
            var gifimg = $("<img>")
            gifimg.addClass("mx-auto p-2")
            gifimg.attr("data-move", response.data[i].images.fixed_height.url)
            gifimg.attr("data-still", response.data[i].images.fixed_height_still.url)
            gifimg.attr("data-condition", "still")
            gifimg.attr("src", response.data[i].images.fixed_height_still.url)
            $("#gif-holder").append(gifimg)
        }
        $("img").on("click", clickImage)
    })
}

function clickImage() {
    alert ("clicked")
}

$(".my-btn").on("click", clickButton)

$("form").on("submit", function (e) {
    e.preventDefault()
    gifbtn = $("<button>").addClass("btn btn-info my-btn")
    gifbtn.text($("#searchInput").val())
    $("#btn-holder").append(gifbtn)
    $(".my-btn").on("click", clickButton)
    $("img").on("click", clickImage)
})


