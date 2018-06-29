function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  var rankedList = []
  rankedList = document.querySelectorAll('ul.ranked-list li')
  for (let i=0; i<rankedList.length;i++) {
    var value = parseInt(rankedList[i].innerHTML)
    value += 1;
    rankedList[i].innerHTML = value
  }
}