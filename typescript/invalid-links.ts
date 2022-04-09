// disable anchor without reference
function invalidBlankAnchor(){
  let anchors:NodeListOf<Element> = document.querySelectorAll("a[href=''], a[href='#']")
  let i:number = 0;
  for(i=0; i<anchors.length; i+=1){
    anchors[i].addEventListener("click", (e)=>{e.preventDefault()})
  }
}