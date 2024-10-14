import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const date = searchParams.get('date') || 'N/A';
  const time = searchParams.get('time') || 'N/A';
  const address = searchParams.get('address') || 'N/A';
  const puppy = searchParams.get('puppy') || 'N/A';
  const price = searchParams.get('price') || 'SG';

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#66c0c9',
          width: '100%',
          height: '100%',
          padding: 20,
          position: 'relative',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
          }}
        >
          <img
            src="https://example.com/logo.png" // Add your logo URL here
            alt="Puppy Singapore"
            width="100"
          />
        </div>

        <div
          style={{
            textAlign: 'center',
            marginTop: 100,
            fontSize: 50,
            color: '#ff5959',
            fontWeight: 'bold',
          }}
        >
          Hello!
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 30,
            color: '#fff',
          }}
        >
          <p>Appointment details:</p>
          <p>Date: <strong>{date}</strong></p>
          <p>Time: <strong>{time}</strong></p>
          <p>Address: <strong>{address}</strong></p>
          <p>Puppy: <strong>{puppy}</strong></p>
          <p>Price: <strong>{price}</strong></p>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 20,
            left: 20,
            fontSize: 20,
            color: '#fff',
          }}
        >
          Thank you for choosing Puppy Singapore
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
