class Indicator {
    constructor(x,y,r) {
        this.x = x
        this.y = y
        this.r = r
    }
    setActive() {
        this.active = true
    }
    draw(context) {
        if(this.active) {
            context.fillStyle = "#1565C0"
        }
        else {
            context.fillStyle = "#9E9E9E"
        }
        context.beginPath()
        context.arc(this.x,this.y,this.r,0,2*Math.PI)
        context.fill()
    }
}
