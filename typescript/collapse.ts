class Collapse{
  target:Element
  actor:Element

  constructor(element: Element){
    this.target = element
    this.actor = document.getElementById(element.getAttribute('data-collapsed'))
    this.actor.addEventListener("click", (evt)=>{
      this.toggle()
    })
  }

  toggle(){
    this.target.classList.toggle("show")
  }

  show(){
    this.target.classList.add("show")
  }

  hide(){
    this.target.classList.remove("show")
  }

  destroy(){
    this.target.remove()
  }
}