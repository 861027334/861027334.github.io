
onmessage = function(e) {
// postMessage('俺收到了'+e.data);

let frs = new FileReaderSync();
let result = frs.readAsDataURL(e.data);
postMessage(result);
}