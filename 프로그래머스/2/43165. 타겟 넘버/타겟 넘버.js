/*
    문제 분석 => 트리구조인게 보인다. 트리를 순회해서 끝 노드에 도달 시 답이 결정되야 하는구조.
    중간에 값이 나온다고 카운트를 올리면 안되고, 반드시 끝에 도달을 했을 때 정해야 한다.
    
    4
        +1
            +2
                +1
                -1
            -2
                +1
                -1
        -1
            +2
                +1
                -1
            -2
                +1
                -1
    
    -4
        +1
            +2
                +1
                -1
            -2
                +1
                -1
        -1
            +2
                +1
                -1
            -2
                +1
                -1
                
    이런 류의 문제는 2가지 방식으로 탐색할 수 있다.
    DFS => 스택을 이용해서 구할 수 있다.
    BFS => 힙을 이용해서 구할 수 있따.
*/


function bfsSolve(numbers, target) {
    let count = 0;
    const queue = [[0, 0]];
    
    while (queue.length > 0) {
        const [index, sum] = queue.shift();
        
        if (index === numbers.length) {
            if (sum === target) count++;
            continue;
        }
        
        queue.push([index + 1, sum + numbers[index]]);
        queue.push([index + 1, sum - numbers[index]]);
    }
    
    return count;
}

function dfsSolve(numbers, target) {
    let count = 0;
    
    function dfs(index, sum) {
        if (index === numbers.length) {
            if (sum === target) count++;
            return;
        }
        
        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }
    
    dfs(0, 0);
    
    return count;
}


function solution(numbers, target) {
    return dfsSolve(numbers, target);
    // return bfsSolve(numbers, target);
}