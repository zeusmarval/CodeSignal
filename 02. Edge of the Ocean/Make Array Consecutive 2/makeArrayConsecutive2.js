var statues = [6, 2, 3, 8];

function solution(statues) {
    let max = Math.max(...statues);
    let min = Math.min(...statues);

    let value = ((max-min)-statues.length) + 1;

    return value;
}

console.log(solution(statues));