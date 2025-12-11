
//0 1 1 2 3 5 8..

let n:number = 10;
let x = 0;
let y = 1;
let z:number ;
process.stdout.write("Fibonacci series: "+x+" "+y)


for(let i:number=1; i<=n-2; i++){
   z=x+y;
   process.stdout.write(" "+z)
   x=y;
   y=z;
    
}