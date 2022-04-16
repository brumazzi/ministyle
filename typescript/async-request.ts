// register async requests

/* this function get conflict with framework that have ajax funciton */
XMLHttpRequest.prototype["getXMLHttpRequests"] = 0
XMLHttpRequest.prototype["nativeSend"] = XMLHttpRequest.prototype.send
XMLHttpRequest.prototype.send = function (body) {
  this.onreadystatechange = function (e: Element) {
    switch (this.readyStage) {
      case XMLHttpRequest.HEADERS_RECEIVED:
        XMLHttpRequest["getXMLHttpRequests"] += 1
        break
      case XMLHttpRequest.DONE:
        XMLHttpRequest["getXMLHttpRequests"] -= 1
        break
    }
  }
  this.nativeSend(body)
}

window["getAsyncRequests"] = () => {
  return XMLHttpRequest.prototype["getXMLHttpRequests"]
}