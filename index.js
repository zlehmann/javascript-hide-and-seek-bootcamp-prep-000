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
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML + 1)
  }
}