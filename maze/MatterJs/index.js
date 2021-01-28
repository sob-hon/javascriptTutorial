const {Engine, Render, World, Runner, Bodies, Mouse, MouseConstraint} = Matter;

const width = 800;
const height = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width,
        height
    }
});

Render.run(render);
Runner.run(Runner.create(), engine);

World.add(world, MouseConstraint.create(engine,{
    mouse: Mouse.create(render.canvas)

}));
// const shape = Bodies.rectangle(200, 200, 50, 50, {
//     isStatic: true
// });
// World.add(world, shape);

// Creating walls that shape wouldn't go out of world
const walls = [
    Bodies.rectangle(400, 0, 800, 40, { isStatic: true }),
    Bodies.rectangle(400, 600, 800, 40, { isStatic: true }),
    Bodies.rectangle(0, 300, 40, 600, { isStatic: true }),
    Bodies.rectangle(800, 300, 40, 600, { isStatic: true })

];
World.add(world, walls);
// make different shapes in random coordinates
for (let i = 0; i < 60; i++) {
    if (Math.random() > 0.3){
        World.add(world, Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50));
    }
    else {
        World.add(world, Bodies.circle(Math.random() * width, Math.random() * height, 35));
    }
}