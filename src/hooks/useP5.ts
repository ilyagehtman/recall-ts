import p5Types, { UNKNOWN_P5_CONSTANT as P5 } from 'p5'
import { interpolate } from '../util/service.ts'
import React, { SetStateAction } from 'react'

let pic: p5Types.Image
const canvasWidth = 600
const canvasHeight = 600

export const useP5 = (
  color: string,
  canvasTiles: number, // 0 <-> 30
  canvasEllipseSize: number, // 0 <-> 50
  imgBase64Data: string,
  setCanvas: React.Dispatch<SetStateAction<HTMLCanvasElement | undefined>>
) => {
  const preload = (p5: P5) => {
    pic = p5.loadImage(imgBase64Data)
    pic.loadPixels()
  }

  const setup = (p5: P5, canvasParentRef: Element) => {
    const canvas = p5.createCanvas(canvasWidth, canvasHeight)
    setCanvas(canvas.elt as HTMLCanvasElement)
    canvas.parent(canvasParentRef)
    pic.resize(canvasWidth, canvasHeight)
    pic.filter('gray')
  }

  const draw = (p5: P5) => {
    p5.image(pic, 0, 0)

    p5.noStroke()
    p5.fill(color)

    const tiles: number = interpolate(canvasTiles, 0, 30, 70, 200)
    const ellipse = interpolate(canvasEllipseSize, 0, 50, 6, 20)

    const tileSize: number = canvasWidth / tiles
    p5.translate(tileSize / 2, tileSize / 2)
    console.log(tiles)
    for (let x = 0; x < tiles; x++) {
      for (let y = 0; y < tiles; y++) {
        const color: number[] = pic.get(x * tileSize, y * tileSize)
        const size = p5.brightness(color)
        if (size > 60 && size < 85) {
          p5.ellipse(x * tileSize, y * tileSize, (size / tileSize) * ellipse, (size / tileSize) * ellipse)
        }
      }
    }
  }

  return { preload, setup, draw }
}