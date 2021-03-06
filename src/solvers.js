/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
// [
//  *[0//,0//,0//]
//  [0,0,0]
//  [0,0,0]
// ]
window.findNRooksSolution = function(n) {
  var board = new Board({'n':n});
  var solution;
  var bool = false;

  var recurse = function(rowIndex) {

    if(rowIndex === n) {
      bool = true;
      return;
    }

    for (var i = 0; i < board.rows()[rowIndex].length; i++){ //columns
      board.togglePiece(rowIndex, i);
      if (!board.hasAnyRooksConflicts()) {
        recurse(rowIndex + 1);
        if (bool){
          return board.rows();
        }
      }
      board.togglePiece(rowIndex, i);
    }
  };
  solution = recurse(0);


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));

   return solution//recurse(0);
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({'n':n});
  var solutionCount = 0;

  var recurse = function(rowIndex) {

    if(rowIndex === n) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < board.rows()[rowIndex].length; i++){ //columns
      board.togglePiece(rowIndex, i);
      if (!board.hasAnyRooksConflicts()) {
        recurse(rowIndex + 1);
      }
      board.togglePiece(rowIndex, i);
    }
  };
  recurse(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  if(n === 1) {
    return [[1]];
  }

  if(n === 0 || n === 2 || n === 3) {
    var empty = new Board({n:n});
    return empty.rows();
  }

  var board = new Board({'n':n});
  var solution;
  var bool = false;

  var recurse = function(rowIndex) {

    if(rowIndex === n) {
      bool = true;
      return;
    }

    for (var i = 0; i < board.rows()[rowIndex].length; i++){ //columns
      board.togglePiece(rowIndex, i);
      if (!board.hasAnyQueensConflicts()) {
        recurse(rowIndex + 1);
        if (bool){
          return board.rows();
        }
      }
      board.togglePiece(rowIndex, i);
    }
  };
  solution = recurse(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

  var board = new Board({n:n});
  var solutionCount = 0;

  var recurse = function(rowIndex) {

    if(rowIndex === n) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < board.rows()[rowIndex].length; i++){ //columns
      board.togglePiece(rowIndex, i);
      if (!board.hasAnyQueensConflicts()) {
        recurse(rowIndex + 1);
      }
      board.togglePiece(rowIndex, i);
    }
  };

  recurse(0);
  console.log(board.rows());
  // if(n === 2 || n == 3) {
  //   solutionCount = 0;
  // }

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
