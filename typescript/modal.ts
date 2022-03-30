// Modal Object

class Modal{
  target:Element

  constructor(element: Element){
    this.target = element
    element.addEventListener("click", (e: any)=>{
      if(e.target.className.split(' ').includes("modal")){
        e.target.classList.remove("active")
      }
    })
  }

  show(){
    this.target.classList.add("active")
  }

  hide(){
    this.target.classList.remove("active")
  }

  destroy(){
    this.target.remove()
  }
}