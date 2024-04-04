export function generateCenteredRandomShapesMatrix(size: number, density: number): number[][] {
  const matrix: number[][] = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => 0)
  )

  const initialClusterSize = 5

  // Начальные случайные координаты для первой единицы, ближе к центру матрицы
  const startX = Math.floor(size / 2) - Math.floor(initialClusterSize / 2)
  const startY = Math.floor(size / 2) - Math.floor(initialClusterSize / 2)

  // Создание начальной кучки
  for (let x = startX; x < startX + initialClusterSize; x++) {
    for (let y = startY; y < startY + initialClusterSize; y++) {
      if (Math.random() < density) {
        matrix[x][y] = 1
      }
    }
  }

  // Добавление новых единиц вокруг уже существующих
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (matrix[i][j] === 1) {
        // Добавляем новые единицы вокруг текущей единицы
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            // Пропускаем текущую единицу
            if (dx === 0 && dy === 0) continue

            const newX = i + dx
            const newY = j + dy

            // Проверяем, чтобы новые координаты были в пределах матрицы
            if (newX >= 0 && newX < size && newY >= 0 && newY < size) {
              // Добавляем новую единицу с заданной вероятностью
              if (Math.random() < density) {
                matrix[newX][newY] = 1
              }
            }
          }
        }
      }
    }
  }

  return matrix
}

export const interpolate = (value: number, oldMin: number, oldMax: number, newMin: number, newMax: number): number => {
  const oldRange = oldMax - oldMin
  const newRange = newMax - newMin
  return (((value - oldMin) * newRange) / oldRange) + newMin
}