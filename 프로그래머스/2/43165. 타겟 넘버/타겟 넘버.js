/*
    예전에는 막힘없이 풀었던 것 같은데, 이번에는 좀 막히는 문제.
    코테를 안한지 상당히 되었나보다. 이론으로 접근하지말고, 실전으로 접근하자.
    
    숫자들이 주어지면, 이를 배치해서 +-를 해서 값을 도출하는 문제이다.
    
    순회를 해야한다.
    
    여기서는 "모든 경우"의 수를 요구한다. => 우선 이것만 보고도, DFS / BFS를 찾을 수 있어야 한다.
    모든 경우의 수를 구할 때는 내려갈 때마다 다 고려를 해야하므로, (모든 트리를 순회) 그렇기에, DFS가 적합해보인다.

    코딩테스트를 만나면, 우선 경우의 수를 적어보는 게 좋다.
    그렇게 해서 푸는게 진짜 답이기 때문에 그렇다.
    
    +1
        +1
            +1
                +1
                    +1
                    -1
                -1
                    +1
                    -1
            -1
        -1
        
        
    이렇게 그리는게 맞는지 모르겠다.
    어찌되었든 [1, 1, 1, 1, 1]이 있을 때 하나씩 순회한다고 보면 될 듯 하다.
    첫 노드는 0이고, 양갈래로 1, -1로 갈라진달까??
    
    끝까지 순회해서, 타겟넘버가 나오는 수를 구하니까, DFS가 적합하다.
    
    전체 순회할 경우 DFS가 BFS보다 빠르기 때문이다.
    
    DFS/BFS는 크게 각각 3가지 방법으로 접근할 수 있다.
    
    1. 스택/큐
    2. 트리를 만들어서 직접 순회
    3. 재귀
    
    나는 기존에 2에 많이 묶여있어서 제대로 못한 느낌이 크다. 이제는 벗어나서 해보자.
*/

function solution(numbers, target) {
    let count = 0;    
    const stack = [[0, 0]];
    
    while(stack.length > 0) {
        const [index, total] = stack.pop();
        
        if (total === target && index === numbers.length) {
            count ++;
        }
        
        if (index === numbers.length) continue;
        
        stack.push([index + 1, total + numbers[index]]);
        stack.push([index + 1, total - numbers[index]]);
    }
    
    return count;
}