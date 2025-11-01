import React, { useRef, useEffect } from 'react';

const STAR_COUNT = 120;
const STAR_COLOR = 'white';
const STAR_ACCENT = 'red';
const STAR_SIZE = [1, 2];
const STAR_SPEED = [0.1, 0.5];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createStars(width, height) {
  return Array.from({ length: STAR_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: randomBetween(STAR_SIZE[0], STAR_SIZE[1]),
    speed: randomBetween(STAR_SPEED[0], STAR_SPEED[1]),
    color: Math.random() > 0.8 ? STAR_ACCENT : STAR_COLOR,
  }));
}

export default function StarsBackground() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    let stars = createStars(width, height);

    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.color === STAR_ACCENT ? 0.7 : 0.9;
        ctx.fill();
        ctx.globalAlpha = 1;
        star.x += star.speed;
        if (star.x > width) star.x = 0;
      }
      requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      stars = createStars(width, height);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'black',
      }}
      aria-hidden="true"
    />
  );
}