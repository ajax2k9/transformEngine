let width = 800;
let height = 800;
let objects = [];
let ints = [0,10,20,50,10]

function setup(){
    let p5canvas = createCanvas(width,height);
    objects.push(new Transform(0,0))
    let t2 = new Transform(10,50,objects[0])
    let t3 = new Transform(10,20,t2)
    let t4 = new Transform(10,0,t3)
    let t5 = new Transform(0,20,t4)
    objects.push(t2,t3,t4,t5)
}

function draw(){
    shapesMoving = false;
    background(200,200,200);
    translate(width/2,height/2);
    line(-width/2,0,width/2,0)
    line(0,-height/2,0,height/2)
    objects.forEach(o=>{o.draw()});

}
