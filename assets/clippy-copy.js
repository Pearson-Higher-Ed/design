var copyToClipboard = function(text) {
  var hiddenNode = document.createElement('textarea')
  hiddenNode.textContent = text
  hiddenNode.style.position = 'absolute'
  hiddenNode.style.left = '-9999px'

  document.body.appendChild(hiddenNode)
  hiddenNode.select()

  document.execCommand('copy')
  hiddenNode.remove()
}
