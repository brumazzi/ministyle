// Modal Object

class Navbar{
  target:Element

  constructor(element: Element){
    this.target = element
  }

  toggle(){
    this.target.classList.toggle("active")
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