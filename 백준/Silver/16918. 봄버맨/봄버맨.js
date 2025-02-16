const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const checkAround = (tRow, tColumn, board) => {
  // row, column 순
  const position = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];
  const target = [];

  position.forEach((loc) => {
    const checked = [tRow + loc[0], tColumn + loc[1]];

    if (checked[0] < 0 || checked[0] >= board.length || checked[1] < 0 || checked[1] >= board[0].length) return;
    target.push(checked);
  });

  target.push([tRow, tColumn]);

  return target;
};

// 입력된 위치를 .으로 바꾸는 로직

const clear = (row, column, board) => {
  board[row][column] = '.';
};

// 시간이 되었을 때 폭탄이 터지는 로직

const bomb = (board) => {
  const tmpBoard = [];

  board.forEach((row) => {
    tmpBoard.push([...row]);
  });

  board.forEach((rowData, row) => {
    rowData.forEach((columnData, column) => {
      if (columnData <= 0) {
        const around = checkAround(row, column, board);
        around.forEach((target) => {
          clear(target[0], target[1], tmpBoard);
        });
      }
    });
  });

  return tmpBoard;
};

// 비어있는 칸에 폭탄 채우는 로직

const addBomb = (board) => {
  board.forEach((rowData, row) => {
    rowData.forEach((columnData, column) => {
      if (columnData === '.') board[row][column] = 2;
    });
  });
};

// 폭탄의 카운트를 감소시키는 로직
const discountBomb = (board) => {
  board.forEach((rowData, row) => {
    rowData.forEach((columnData, column) => {
      if (columnData !== '.') board[row][column]--;
    });
  });
};

// 입력을 처리하는 로직

const [row, column, targetCount] = input[0].split(' ').map(Number);

let board = [];

// 초기화 (0초)
for (let i = 1; i < input.length; i++) {
  const initData = input[i].split('').map((data) => {
    if (data === '.') return '.';
    else return 2;
  });
  board.push(initData);
}

// 메인
for (let i = 1; i <= targetCount; i++) {
  board = bomb(board);

  discountBomb(board);

  if (i % 2 === 0) {
    addBomb(board);
  }
}

board.forEach((rowData, row) => {
  rowData.forEach((columnData, column) => {
    if (columnData !== '.') board[row][column] = 'O';
  });
  console.log(rowData.join(''));
});
