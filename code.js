var p1 = [];
var p2 = [];
var p1Turn = true;
var winningCombos = [["a1","a2","a3"],
                     ["b1","b2","b3"],
                     ["c1","c2","c3"],
                     ["a1","b1","c1"],
                     ["a2","b2","c2"],
                     ["a3","b3","c3"],
                     ["a1","b2","c3"],
                     ["a3","b2","c1"]];

onEvent("restartBtn", "click", function() {
  var rowIds = ["a","b","c"];
  for (var i = 0; i < 3; i++) {
    for (var j = 1; j < 4; j++) {
      setText(rowIds[i] + j, "");
    }
  }
});

onEvent("screen1", "click", function(event) {
  var clicked = event.targetId;
  if (clicked != "screen1" && clicked != "restartBtn") {
    handleTurn(clicked);
  }
});

function handleTurn(id) {
  if (p1Turn) {
    appendItem(p1, id);
    setText(id, "O");
  } else {
    appendItem(p2, id);
    setText(id, "X");
  }
  p1Turn = !p1Turn;
  console.log("p1: " + p1);
  console.log("p2: " + p2);
  console.log("p1 turn: " + p1Turn);
  
}

function includes(list, item) {
  var found = false;
  for (var i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return true;
    }
  }
  if (found === false) {
    return false;
  }
}