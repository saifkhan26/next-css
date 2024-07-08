"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import classes from "./CanvasComponent.module.css";

const PanningZoomingCanvas = () => {
  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const viewportTransform = useRef({ x: 0, y: 0, scale: 1 });
  const previousMousePos = useRef({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ height: 0, width: 0 });
  const [isPanning, setPanning] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    ctx.current = context;
    const { clientWidth, clientHeight } = canvas.parentElement;
    setWindowSize({ height: clientHeight, width: clientWidth });
    render();
  }, []);

  const render = useCallback(() => {
    if (!ctx.current) return;
    ctx.current.setTransform(1, 0, 0, 1, 0, 0);
    ctx.current.clearRect(0, 0, windowSize.width, windowSize.height);
    ctx.current.setTransform(
      viewportTransform.current.scale,
      0,
      0,
      viewportTransform.current.scale,
      viewportTransform.current.x,
      viewportTransform.current.y,
    );
    drawRect(0, 0, 100, 100, "red");
    drawRect(200, 200, 100, 100, "blue");
  }, [windowSize]);

  const drawRect = (x, y, width, height, color) => {
    ctx.current.fillStyle = color;
    ctx.current.fillRect(x, y, width, height);
  };

  const updatePanning = useCallback((e) => {
    const localX = e.clientX;
    const localY = e.clientY;

    viewportTransform.current.x += localX - previousMousePos.current.x;
    viewportTransform.current.y += localY - previousMousePos.current.y;

    previousMousePos.current = { x: localX, y: localY };
  }, []);

  const updateZooming = useCallback((e) => {
    const localX = e.clientX;
    const localY = e.clientY;

    const newScale = viewportTransform.current.scale * (1 - e.deltaY * 0.001);

    const newX =
      localX -
      (localX - viewportTransform.current.x) *
        (newScale / viewportTransform.current.scale);
    const newY =
      localY -
      (localY - viewportTransform.current.y) *
        (newScale / viewportTransform.current.scale);

    viewportTransform.current = {
      x: newX,
      y: newY,
      scale: newScale,
    };
  }, []);

  const zoomIn = () => {
    const newScale = viewportTransform.current.scale + 0.1;
    const localX = windowSize.width / 2;
    const localY = windowSize.height / 2;

    const newX =
      localX -
      (localX - viewportTransform.current.x) *
        (newScale / viewportTransform.current.scale);
    const newY =
      localY -
      (localY - viewportTransform.current.y) *
        (newScale / viewportTransform.current.scale);

    viewportTransform.current = {
      x: newX,
      y: newY,
      scale: newScale,
    };
    requestAnimationFrame(render);
  };

  const onMouseWheelHandler = useCallback(
    (e) => {
      updateZooming(e);
      requestAnimationFrame(render);
    },
    [render, updateZooming],
  );

  const onMouseMoveHandler = useCallback(
    (e) => {
      if (!isPanning) return;
      updatePanning(e);
      requestAnimationFrame(render);
    },
    [isPanning, render, updatePanning],
  );

  const onMouseDownHandler = useCallback((e) => {
    setPanning(true);
    previousMousePos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const onMouseUpHandler = useCallback(() => {
    setPanning(false);
  }, []);

  return (
    <>
      <button onClick={zoomIn}>Zoom in</button>
      <canvas
        ref={canvasRef}
        width={windowSize.width}
        height={windowSize.height}
        onMouseUp={onMouseUpHandler}
        onMouseDown={onMouseDownHandler}
        onMouseMove={onMouseMoveHandler}
        onWheel={onMouseWheelHandler}
        className={classes.canvas}
      ></canvas>
    </>
  );
};

export default PanningZoomingCanvas;
