const $ = (query) => document.querySelector(query);

const sphere_left = $('#left');
const sphere_right = $('#right');

const shiftDegrees = (value) => (value + 1) % 360;

let degrees = 0;

const animate = () => {
  degrees = shiftDegrees(degrees);
  const color = `hsl(${degrees}, 100%, 50%)`;
  const color2 = `hsl(${degrees}, 75%, 75%)`;
  // const variation = Math.sin(Date.now() / 1000);
  // let position = sphere.position;
  //position[1] = 3.5 + Math.sin(degrees * Math.PI / 180);

  sphere_left.setAttribute('color', color);
  //sphere.setAttribute('position', position);
  sphere_left.setAttribute('position', { x: 51.7, y: 5 + Math.sin(degrees * Math.PI / 180) / 3, z: 6 });
  // position="52 2.5 6"

  sphere_right.setAttribute('color', color2);
  //sphere.setAttribute('position', position);
  sphere_right.setAttribute('position', { x: 56.2, y: 5 + Math.sin(degrees * Math.PI / 180) / 3, z: 6 });

  requestAnimationFrame(animate);
};

requestAnimationFrame(animate);