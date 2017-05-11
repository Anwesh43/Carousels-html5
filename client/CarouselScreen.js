class Carousel {
    constructor(imgs,interval,w,h) {
        this.x = 0
        this.initX = 0
        this.interval = interval||1000
        this.imgs = []
        this.w = w || window.innerWidth*0.5
        this.h = h || window.innerHeight*0.5
        let imgLoaded = 0
        imgs.forEach((imgSrc)=>{
            const img = new Image()
            img.src = imgSrc
            img.onload = ()=>{
                imgLoaded++
                if(imgLoaded == imgs.length) {
                    this.create()
                }
            }
            this.imgs.push(img)
        })
    }
    create() {
        const canvas = document.createElement('canvas')
        canvas.width = this.w
        canvas.height = this.h
        var interval = this.interval
        const context = canvas.getContext('2d')
        const img = document.createElement('img')
        console.log(this.imgs)
        var time = 0 ,maxTime = this.interval/(100),initX = 0
        document.body.appendChild(canvas)
        let  draw = () =>{
          if(interval!=this.interval  && initX-this.x >= this.w) {
              interval = this.interval
              initX = this.x
          }
          if(this.x == 0 && initX == 0) {
              interval = this.interval
          }
          context.clearRect(0,0,this.w,this.h)
          context.save()
          context.translate(this.x,0)
          this.imgs.forEach((img,index)=>{
              context.drawImage(img,index*this.w,0,this.w,this.h)
          })
          context.restore()

          if(interval == this.interval) {
              time ++
              if(time == 2 ){
                  time = 0
                  interval = 50
                  if(this.x <= -this.w * (this.imgs.length -1)) {
                      this.x= 0
                      this.initX = 0
                      interval = this.interval
                      console.log("done")
                  }
              }
          }
          if(interval != this.interval) {
            this.x-=(this.w/5)
          }
          const dataUrl = canvas.toDataURL()
          img.src = dataUrl
          //document.body.appendChild(img)
          setTimeout(()=>{
              draw()
          },interval)
        }
        draw()
    }
}
