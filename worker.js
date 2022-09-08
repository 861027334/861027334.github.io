// self.addEventListener('message', function (e) {
//     self.postMessage('You said: ' + e.data);
//   }, false);

  onmessage = function(e) {
    postMessage('俺收到了'+e.data);
  }