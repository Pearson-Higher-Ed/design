---
---
var componentData = [
  {% for page in site.pages %}

  {% if page.section != 'Components' or
        page.status != 'active' or
        page.private == true %}
    {% continue %}
  {% endif %}

  {
    name: '{{page.title}}',
    version: '{{page.version}}',
    status: '{{page.status}}',
    url: '{{page.url}}',
    features: [
      {% for block in page.blocks %}
        {% for feature in block.features %}
        '{{feature}}',
        {% endfor %}
      {% endfor %}
    ]
  },
  {% endfor %}
]
var named = _.chain(componentData)
             .sortBy('version')
             .groupBy('name')
             .value()

var input, dropdown, selectedResult
var mousedownInsideDropdown = false

var initDropdown = function(div) {
  input = div.querySelector('input')
  dropdown = div.querySelector('div.dropdown')

  input.addEventListener('input', onInput)
  input.addEventListener('keydown', onKeydown)

  dropdown.addEventListener('mousedown', onMousedown)
  input.addEventListener('blur', onBlur)
  input.addEventListener('focus', onFocus)

  dropdown.addEventListener('mouseover', onMouseover)

  // Prevent dropdown appearing upon back navigation
  window.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      selectedResult = null
      populateDropdown(null)
    }
  })
}

var toggleDropdown = (function() {
  return function(state) {
    switch (state) {
      case 'closed':
        dropdown.classList.remove('open')
        break;
      case 'open':
        dropdown.classList.add('open')
        break;
      default:
        dropdown.classList.toggle('open')
    }
  }
})()

var buildResult = function(result) {
  var resultNode = document.createDocumentFragment()
  var resultDiv = document.createElement('div')
  resultDiv.classList.add('result')

  var link = document.createElement('a')
  link.href = result.url
  resultDiv.appendChild(link)

  var heading = document.createElement('h5')
  heading.textContent = result.name
  link.appendChild(heading)

  var version = document.createElement('p')
  version.textContent = 'Version ' + result.version
  link.appendChild(version)

  resultNode.appendChild(resultDiv)
  return resultNode
}

var populateDropdown = (function(){
  return function(contents) {
    dropdown.innerHTML = ''
    selectedResult = contents.firstElementChild
    dropdown.appendChild(contents)
    if (selectedResult) {
      selectedResult.classList.add('selected')
    }
  }
})()

var onInput = function(e) {
  var newVal = e.target.value

  if (newVal.length == 0) {
    toggleDropdown('closed')
  } else {
    toggleDropdown('open')
  }

  var results = fuzzysort.go(
    newVal,
    componentData,
    {
      limit: 5,
      key: 'name'
    }
  )

  var resultsNode = document.createDocumentFragment()
  results.forEach(result => {
    resultsNode.appendChild(buildResult(result.obj))
  })
  populateDropdown(resultsNode)
}

var arrowDownDropdown = function() {
  if (selectedResult.nextElementSibling) {
    selectedResult.classList.remove('selected')
    selectedResult = selectedResult.nextElementSibling
    selectedResult.classList.add('selected')
  }
}

var arrowUpDropdown = function() {
  if (selectedResult.previousElementSibling) {
    selectedResult.classList.remove('selected')
    selectedResult = selectedResult.previousElementSibling
    selectedResult.classList.add('selected')
  }
}

var selectCurrentDropdown = function() {
  window.location.href = selectedResult.children[0].href
}

var onKeydown = function(e) {
  switch (e.keyCode) {
    case 40:
      e.preventDefault()
      arrowDownDropdown()
      break
    case 38:
      e.preventDefault()
      arrowUpDropdown()
      break
    case 13:
      selectCurrentDropdown()
  }
}


var onMousedown = function(e) {
  mousedownInsideDropdown = true
}
var onBlur = function(e) {
  if (!mousedownInsideDropdown) {
    toggleDropdown('closed')
  }
  mousedownInsideDropdown = false
}

var onFocus = function(e) {
  toggleDropdown('open')
}

var onMouseover = function(e) {
  if (!e.target.matches('div.result')) { return }
  if (e.target == selectedResult) { return }

  selectedResult.classList.remove('selected')
  selectedResult = e.target
  selectedResult.classList.add('selected')
}
