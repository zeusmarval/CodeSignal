var sequence = [1, 3, 2, 1];

function solution(sequence) {
    let count = 0;
  
    for (let i = 1; i < sequence.length; i++) {
      if (sequence[i] <= sequence[i-1]) {
        count++;
        if (count > 1) return false;
        if (sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) return false;
      }
    }
    
    return true;
}

solution(sequence);