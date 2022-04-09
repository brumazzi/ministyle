let _scrollGroup: Array<any>

function scrollInit() {
  _scrollGroup = [
    ["top", 0, 130],
    ["footer", window['scrollMaxY'] - 400, window['scrollMaxY']]
  ]
}

window["scrollGroup"] = (): any => {
  let scroll = window.scrollY
  for (let i: number = 0; i < _scrollGroup.length; i += 1) {
    if (scroll >= _scrollGroup[i][1] && scroll <= _scrollGroup[i][2]){
      return _scrollGroup[i][0]
    }
  }

  return ""
}

function scrollSync(){
  setInterval(()=>{
    document.body.setAttribute("data-scroll", window["scrollGroup"]())
  }, 300)
}