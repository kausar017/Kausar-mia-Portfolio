import { memo, useEffect, useRef } from "react";
import "./DotField.css";

const TWO_PI = Math.PI * 2;

const DotField = memo(({
  dotRadius = 1.5,
  dotSpacing = 14,
  cursorRadius = 500,
  cursorForce = 0.1,
  bulgeOnly = true,
  bulgeStrength = 67,
  glowRadius = 160,
  sparkle = false,
  waveAmplitude = 0,
  gradientFrom = "rgba(237, 37, 25, 0.35)",
  gradientTo = "rgba(252, 165, 165, 0.25)",
  glowColor = "#ed2519",
  className = "",
  ...rest
}) => {
  const canvasRef = useRef(null);
  const glowRef = useRef(null);
  const dotsRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999, prevX: -9999, prevY: -9999, speed: 0 });
  const rafRef = useRef(null);
  const sizeRef = useRef({ w: 0, h: 0, offsetX: 0, offsetY: 0 });
  const glowOpacity = useRef(0);
  const engagement = useRef(0);
  const propsRef = useRef({});
  const rebuildRef = useRef(null);
  const glowIdRef = useRef(`dot-field-glow-${Math.random().toString(36).slice(2, 9)}`);

  propsRef.current = {
    dotRadius,
    dotSpacing,
    cursorRadius,
    cursorForce,
    bulgeOnly,
    bulgeStrength,
    sparkle,
    waveAmplitude,
    gradientFrom,
    gradientTo,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const glowElement = glowRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d", { alpha: true });
    const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    let resizeTimer;

    const buildDots = (width, height) => {
      const props = propsRef.current;
      const step = props.dotRadius + props.dotSpacing;
      const columns = Math.floor(width / step);
      const rows = Math.floor(height / step);
      const paddingX = (width % step) / 2;
      const paddingY = (height % step) / 2;
      const dots = new Array(rows * columns);
      let index = 0;

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const x = paddingX + column * step + step / 2;
          const y = paddingY + row * step + step / 2;
          dots[index] = { ax: x, ay: y, sx: x, sy: y, vx: 0, vy: 0, x, y };
          index += 1;
        }
      }
      dotsRef.current = dots;
    };

    const resizeCanvas = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const rect = canvas.parentElement.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        canvas.width = width * devicePixelRatio;
        canvas.height = height * devicePixelRatio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
        sizeRef.current = {
          w: width,
          h: height,
          offsetX: rect.left + window.scrollX,
          offsetY: rect.top + window.scrollY,
        };
        buildDots(width, height);
      }, 100);
    };

    const handleMouseMove = (event) => {
      const size = sizeRef.current;
      mouseRef.current.x = event.pageX - size.offsetX;
      mouseRef.current.y = event.pageY - size.offsetY;
    };

    const updateMouseSpeed = () => {
      const mouse = mouseRef.current;
      const deltaX = mouse.prevX - mouse.x;
      const deltaY = mouse.prevY - mouse.y;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      mouse.speed += (distance - mouse.speed) * 0.5;
      if (mouse.speed < 0.001) mouse.speed = 0;
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
    };

    const speedInterval = setInterval(updateMouseSpeed, 20);
    let frameCount = 0;

    const tick = () => {
      frameCount += 1;
      const dots = dotsRef.current;
      const mouse = mouseRef.current;
      const { w: width, h: height } = sizeRef.current;
      const props = propsRef.current;
      const targetEngagement = Math.min(mouse.speed / 5, 1);
      engagement.current += (targetEngagement - engagement.current) * 0.06;
      if (engagement.current < 0.001) engagement.current = 0;
      const currentEngagement = engagement.current;

      glowOpacity.current += (currentEngagement - glowOpacity.current) * 0.08;
      if (glowElement) {
        glowElement.setAttribute("cx", mouse.x);
        glowElement.setAttribute("cy", mouse.y);
        glowElement.style.opacity = glowOpacity.current;
      }

      context.clearRect(0, 0, width, height);
      const gradient = context.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, props.gradientFrom);
      gradient.addColorStop(1, props.gradientTo);
      context.fillStyle = gradient;
      const cursorRadiusSquared = props.cursorRadius * props.cursorRadius;
      const radius = props.dotRadius / 2;
      context.beginPath();

      dots.forEach((dot, index) => {
        const deltaX = mouse.x - dot.ax;
        const deltaY = mouse.y - dot.ay;
        const distanceSquared = deltaX * deltaX + deltaY * deltaY;

        if (distanceSquared < cursorRadiusSquared && currentEngagement > 0.01) {
          const distance = Math.sqrt(distanceSquared);
          const angle = Math.atan2(deltaY, deltaX);
          if (props.bulgeOnly) {
            const strength = 1 - distance / props.cursorRadius;
            const push = strength * strength * props.bulgeStrength * currentEngagement;
            dot.sx += (dot.ax - Math.cos(angle) * push - dot.sx) * 0.15;
            dot.sy += (dot.ay - Math.sin(angle) * push - dot.sy) * 0.15;
          } else {
            const move = (500 / Math.max(distance, 1)) * (mouse.speed * props.cursorForce);
            dot.vx += Math.cos(angle) * -move;
            dot.vy += Math.sin(angle) * -move;
          }
        } else if (props.bulgeOnly) {
          dot.sx += (dot.ax - dot.sx) * 0.1;
          dot.sy += (dot.ay - dot.sy) * 0.1;
        }

        if (!props.bulgeOnly) {
          dot.vx *= 0.9;
          dot.vy *= 0.9;
          dot.x = dot.ax + dot.vx;
          dot.y = dot.ay + dot.vy;
          dot.sx += (dot.x - dot.sx) * 0.1;
          dot.sy += (dot.y - dot.sy) * 0.1;
        }

        let drawX = dot.sx;
        let drawY = dot.sy;
        if (props.waveAmplitude > 0) {
          drawY += Math.sin(dot.ax * 0.03 + frameCount * 0.02) * props.waveAmplitude;
          drawX += Math.cos(dot.ay * 0.03 + frameCount * 0.014) * props.waveAmplitude * 0.5;
        }

        const drawRadius = props.sparkle && index % 37 === 0 ? radius * 1.8 : radius;
        context.moveTo(drawX + drawRadius, drawY);
        context.arc(drawX, drawY, drawRadius, 0, TWO_PI);
      });

      context.fill();
      rafRef.current = requestAnimationFrame(tick);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);
    rebuildRef.current = () => {
      const { w: width, h: height } = sizeRef.current;
      if (width > 0 && height > 0) buildDots(width, height);
    };

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearInterval(speedInterval);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    rebuildRef.current?.();
  }, [dotRadius, dotSpacing]);

  return (
    <div className={`dot-field-container ${className}`} {...rest}>
      <canvas ref={canvasRef} />
      <svg className="dot-field-glow" aria-hidden="true">
        <defs>
          <radialGradient id={glowIdRef.current}>
            <stop offset="0%" stopColor={glowColor} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle
          ref={glowRef}
          cx="-9999"
          cy="-9999"
          r={glowRadius}
          fill={`url(#${glowIdRef.current})`}
          style={{ opacity: 0 }}
        />
      </svg>
    </div>
  );
});

DotField.displayName = "DotField";

export default DotField;
