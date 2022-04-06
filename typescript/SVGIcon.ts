class SVGIcon {
  static arrow(dest: Element, opt: object = {}): Element {
    let svg: Element = document.createElement('svg')
    svg.setAttribute("width", opt["width"] || "256")
    svg.setAttribute("height", opt["height"] || "256")

    let path: Element = document.createElement("path")
    path.setAttribute("fill", opt["fill"] || "#65727e")
    path.setAttribute("p", "#M0 40 L128 216 L256 40")

    svg.appendChild(path)
    if (dest) dest.innerHTML = svg.outerHTML
    return svg
  }

  static menu(dest: Element, opt: object = {}): Element {
    let svg: Element = document.createElement('svg')
    svg.setAttribute("width", opt["width"] || "256")
    svg.setAttribute("height", opt["height"] || "256")

    let line1: Element = document.createElement("line")
    line1.setAttribute("x1", "20")
    line1.setAttribute("y1", "60")
    line1.setAttribute("x2", "236")
    line1.setAttribute("y2", "60")
    line1.setAttribute("stroke", opt["stroke"] || "#65727e")
    line1.setAttribute("stroke-width", opt["stroke-width"] || "1.8rem")

    let line2: Element = document.createElement("line")
    line2.setAttribute("x1", "20")
    line2.setAttribute("y1", "127")
    line2.setAttribute("x2", "236")
    line2.setAttribute("y2", "127")
    line2.setAttribute("stroke", opt["stroke"] || "#65727e")
    line2.setAttribute("stroke-width", opt["stroke-width"] || "1.8rem")

    let line3: Element = document.createElement("line")
    line3.setAttribute("x1", "20")
    line3.setAttribute("y1", "195")
    line3.setAttribute("x2", "236")
    line3.setAttribute("y2", "195")
    line3.setAttribute("stroke", opt["stroke"] || "#65727e")
    line3.setAttribute("stroke-width", opt["stroke-width"] || "1.8rem")

    svg.appendChild(line1)
    svg.appendChild(line2)
    svg.appendChild(line3)

    if (dest) dest.innerHTML = svg.outerHTML
    return svg
  }

  static addLoading(): Element{
    let div:Element = document.createElement("div")
    div.classList.add("loading")

    let svg = document.createElement("svg")
    svg.appendChild(document.createElement("circle"))
    svg.appendChild(document.createElement("circle"))
    svg.appendChild(document.createElement("circle"))
    svg.appendChild(document.createElement("circle"))

    div.appendChild(svg)
    document.body.innerHTML += (div.outerHTML)

    return div
  }
}