// register async requests

XMLHttpRequest.prototype["requests"] = 0
XMLHttpRequest.prototype["nativeSend"] = XMLHttpRequest.prototype.send
XMLHttpRequest.prototype.send = function (body) {
  this.onreadystatechange = function (e: Element) {
    switch (this.readyStage) {
      case XMLHttpRequest.HEADERS_RECEIVED:
        XMLHttpRequest["requests"] += 1
        break
      case XMLHttpRequest.DONE:
        XMLHttpRequest["requests"] -= 1
        break
    }
  }
}

window["getAsyncRequests"] = () => {
  return XMLHttpRequest.prototype["requests"]
}