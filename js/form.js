class Form{
    constructor(){}

    display(){
        var tital = createElement("h2")
        tital.html("carReacinggame")
        tital.position(130,0)

        var input = createInput("name")
        var button = createButton("play")
        input.position(130,160)
        button.position(250,200)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            playerCount = playerCount + 1
            player.update(name)
            player.updateCount(playerCount)
            var greeting = createElement("h2")
            greeting.html("hello " + name)
            greeting.position(300,160)
            
        })
        
    }
}