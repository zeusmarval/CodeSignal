x = 's' 
x2 = ''

for (let i = 0; i < x.length; i++) {
    x2 += x[(x.length-1-i)]
}

if (x == x2){
    console.log('PALINDROME')
}else {
    console.log('no')
}
