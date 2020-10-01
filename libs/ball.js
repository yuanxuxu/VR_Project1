const $ = (query) => document.querySelector(query);

const sphere = $("#leftball");

const shiftDegrees = (value) => (value + 1) % 360;

let degrees = 0;

const animate = () => {
  degrees = shiftDegrees(degrees);
  const color = `hsl(${degrees}, 100%, 50%)`;
  // const variation = Math.sin(Date.now() / 1000);
  let position = sphere.position;
  //position[1] = 3.5 + Math.sin(degrees * Math.PI / 180);

  sphere.setAttribute('color', color);
  //sphere.setAttribute('position', position);
  sphere.setAttribute('position', { x: 52, y: 3.5 + Math.sin(degrees * Math.PI / 180), z: 6 });
  // position="52 2.5 6"
  requestAnimationFrame(animate);
};

requestAnimationFrame(animate);