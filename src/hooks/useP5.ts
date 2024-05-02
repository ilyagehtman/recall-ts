import p5Types, { UNKNOWN_P5_CONSTANT as P5 } from 'p5'
import React, { SetStateAction } from 'react'

let pic: p5Types.Image
const canvasWidth = 600
const canvasHeight = 600

const picMargin = 3.1

export const interpolate = (value: number, oldMin: number, oldMax: number, newMin: number, newMax: number): number => {
  const oldRange = oldMax - oldMin
  const newRange = newMax - newMin
  return (((value - oldMin) * newRange) / oldRange) + newMin
}

export const useP5 = (
  hexColor: string | undefined,
  canvasTiles: number, // 0 <-> 30
  canvasEllipseSize: number, // 0 <-> 50
  imgBase64Data: string,
  setCanvas: (canvas: HTMLCanvasElement) => void
) => {
  const preload = (p5: P5) => {
    pic = p5.loadImage(imgBase64Data)
    pic.loadPixels()
  }

  const setup = (p5: P5, canvasParentRef: Element) => {
    const canvas = p5.createCanvas(canvasWidth, canvasHeight)
    setCanvas(canvas.elt as HTMLCanvasElement)
    canvas.parent(canvasParentRef)

    pic.resize(
      canvasWidth - (canvasWidth / picMargin),
      canvasHeight - (canvasHeight / picMargin)
    )

    const newImg = p5.createImage(
      pic.width + (canvasWidth / picMargin),
      pic.height + (canvasHeight / picMargin)
    )

    newImg.loadPixels()
    for (let x = 0; x < newImg.width; x++) {
      for (let y = 0; y < newImg.height; y++) {
        const index = (x + y * newImg.width) * 4
        newImg.pixels[index] = 0 // Красный
        newImg.pixels[index + 1] = 0 // Зеленый
        newImg.pixels[index + 2] = 0 // Синий
        newImg.pixels[index + 3] = 0 // Альфа
      }
    }
    newImg.updatePixels()
    newImg.copy(pic, 0, 0, pic.width, pic.height, (canvasWidth / picMargin) / 2, (canvasHeight / picMargin) / 2, pic.width, pic.height)
    newImg.loadPixels()
    pic = newImg
  }

  const draw = (p5: P5) => {
    p5.background(255, 255, 255)
    // p5.image(pic, 0, 0)
    p5.noStroke()
    p5.fill(hexColor)
    const tiles: number = interpolate(canvasTiles, 0, 30, 30, 100)
    const ellipse: number = interpolate(canvasEllipseSize, 0, 50, 8, 18)

    const tileSize: number = canvasWidth / tiles
    p5.translate(tileSize / 2, tileSize / 2)
    for (let x: number = 0; x < tiles; x++) {
      for (let y: number = 0; y < tiles; y++) {
        const color: number[] = pic.get(x * tileSize, y * tileSize)
        const size: number = p5.brightness(color)
        if (size > 85) {
          p5.ellipse(
            x * tileSize, y * tileSize,
            (size / tileSize) * ellipse,
            (size / tileSize) * ellipse
          )
        }
      }
    }
  }

  return { preload, setup, draw }
}