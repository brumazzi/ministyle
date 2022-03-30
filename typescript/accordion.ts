class Accordion{
  target:Element

  constructor(element: Element){
    this.target = element
    element.querySelectorAll(".header").forEach((e: Element, index: number)=>{
      e.addEventListener("click", (evt)=>{
        this.toggle(e.getAttribute('data-target'))
      })
    })
  }

  toggle(targetID:string){
    this.target.querySelector(`#${targetID}`).classList.toggle("active")
  }

  show(targetID:string){
    this.target.querySelector(`#${targetID}`).classList.add("active")
  }

  hide(targetID:string){
    this.target.querySelector(`#${targetID}`).classList.remove("active")
  }

  destroy(){
    this.target.remove()
  }
}