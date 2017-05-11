class CarouselScreen {
    constructor(imgs,interval,w,h) {
        this.x = 0
        this.initX = 0
        this.interval = interval
        this.imgs = []
        this.w = w || window.innerWidth*0.5
        this.h = h || window.innerHeigh*0.5
        imgs.forEach((imgSrc)=>{
            const img = new Image()
            img.src = imgSrc
            imgs.push(img)
        })
    }
    render() {
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        canvas.width = this.w
        canvas.height = this.h
        setInterval(()=>{
          context.save()
          context.translate(this.x,0)
          this.imgs.forEach((img)=>{
              context.drawImage(img,0,0,w,h)
          })
          if(this.x%w == 0) {
              setTimeout(()=>{

              },this.interval)
          }
          this.x+=(w/5)
          if(x >= w*(this.imgs.length - 1)) {
              x  = 0
          }
        },100)

        context.restore()
    }
}
