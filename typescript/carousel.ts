class Carousel{
  items:Array<Element> = new Array()
  index:number
  target:Element
  timeout:number
  changeIn:number
  intervalRef:any

  constructor(element: Element){
    this.target = element
    let e:any
    element.querySelectorAll(".content > *").forEach((e)=>{
      this.items.push(e)
    })
    this.index = 0
    this.timeout = 5
    this.changeIn = 5

    this.intervalRef = setInterval(()=>{
      if(this.changeIn <= 0){
        this.changeIn = this.timeout
        this.next()
      }else this.changeIn -= 1
      console.log(this.changeIn)
    }, 1000)
  }

  setInterval(interval:number){
    this.timeout = interval
    this.changeIn = interval
  }

  next(){
    this.items[this.index].classList.remove('active')
    this.items[this.index].classList.add('hide')
    this.index = (this.index + 1) % this.items.length;
    this.items[this.index].classList.remove('hide')
    this.items[this.index].classList.add('active')
    this.changeIn = this.timeout
  }

  prev(){
    this.items[this.items.length - (this.index+1)].classList.remove('active')
    this.items[this.index].classList.add('hide')
    this.index = (this.index + 1) % this.items.length;
    this.items[this.index].classList.remove('hide')
    this.items[this.items.length - (this.index+1)].classList.add('active')
    this.changeIn = this.timeout
  }
}