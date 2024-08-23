# Transform Engine
## What it is:
A unity like transform engine that handles rotations, scales and translations of parent child object hiarchies.

## features:
- Can connect child nodes to parent nodes
- Parent nodes affect the child nodes through rotation, translation scaling 
- Node trees retain relative positions to each other
- can get the "global" x and y position from any node
- can disconnect child nodes from parent nodes and have it be its own tree

## How to use it
- create new transform object with 
```
new Transform(x,y,parent) // parent must also be a transform object
```
or
```
new Transform(x,y) //use this to create a root node
```

-move an object
```
t.Move(x,y) //sets object relative to parent, along boy centered axis

```




