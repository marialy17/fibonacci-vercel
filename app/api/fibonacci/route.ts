import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const n = parseInt(searchParams.get('n') || '10');
  
  if (isNaN(n)) {
    return NextResponse.json(
      { error: 'El parámetro "n" debe ser un número' },
      { status: 400 }
    );
  }

  if (n < 0) {
    return NextResponse.json(
      { error: 'El parámetro "n" debe ser un número positivo' },
      { status: 400 }
    );
  }

  // Limitar el valor máximo para evitar sobrecarga
  const safeN = Math.min(n, 1000);

  try {
    const sequence = generateFibonacci(safeN);
    return NextResponse.json({ n: safeN, sequence });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al generar la secuencia Fibonacci' },
      { status: 500 }
    );
  }
}

function generateFibonacci(n: number): number[] {
  const sequence: number[] = [0, 1];
  
  if (n === 0) return [0];
  if (n === 1) return sequence.slice(0, 1);
  
  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  
  return sequence;
}
// This code defines an API route in a Next.js application that generates the Fibonacci sequence up to a specified number n.