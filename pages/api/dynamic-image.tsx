import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  // Extract query parameters
  const customerName = searchParams.get('customerName') || 'Customer Name';
  const date = searchParams.get('date') || 'Date for photo';
  const time = searchParams.get('time') || 'TIME';
  const shopName = searchParams.get('shopName') || 'Shop Name';
  const address1 = searchParams.get('address1') || "";
  const address2 = searchParams.get('address2') || "";
  const breed = searchParams.get('breed') || '';
  const price = searchParams.get('price') || "";
  const shortMessage = searchParams.get('message') || 'Please Contact Jhon';
  const logoUrl = searchParams.get('logoUrl') || 'https://i.imgur.com/RGijyjt.png';
  const shopLogoUrl = searchParams.get('shopLogoUrl') || 'https://i.spread.name/9a3531c3-df76-477e-b4a5-32de4e9eb546_Little-Black-Nose.jpg';
  const puppyPhotoUrl = searchParams.get('puppyPhotoUrl') || 'https://i.spread.name/59893f26-390b-48a6-bd54-37879463a98d_B.jpg';

  return new ImageResponse(
    (
      <div
        style={{
          width: '400px',
          height: '790px',
          backgroundColor: '#7FC7D0',
          position: 'relative',
          fontFamily: 'Arial, sans-serif',
          color: 'black',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Frame */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            right: '10px',
            bottom: '10px',
            border: '2px solid white',
          }}
        />

        {/* Logo */}
        <img
          src={logoUrl}
          alt="Puppy Singapore Logo"
          style={{
            width: '70px',
            height: '70px',
            position: 'absolute',
            top: '20px',
            left: '20px',
          }}
        />

        {/* Photo Container */}
        <div
          style={{
            position: 'relative',
            width: '350px',
            height: '200px',
            margin: '60px auto 10px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <img
            src={shopLogoUrl}
            alt="Shop Logo"
            style={{
              position: 'absolute',
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              left: '15px',
              top: '50px',
              zIndex: 1,
              border: '3px solid white',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}
          />
          <img
            src={puppyPhotoUrl}
            alt="Puppy Photo"
            style={{
              position: 'absolute',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              right: '0',
              top: '0',
              zIndex: 2,
              border: '3px solid white',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}
          />
        </div>

        {/* Hello Box */}
        <div
          style={{
            background: 'white',
            padding: '15px 30px',
            margin: '10px auto',
            width: '80%',
            borderRadius: '10px',
            position: 'relative',
            height: '80px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              color: '#FF6B6B',
              fontSize: '22px',
              fontWeight: 'bold',
              textAlign: 'center',
              margin: '0',
              textShadow: '1px 1px 0 #FFB6B6',
            }}
          >
            Hello!
          </p>
          <p
            style={{
              color: '#333',
              fontSize: '18px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            {customerName}
          </p>
        </div>

        {/* Details Section */}
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            width: '80%',
            borderRadius: '10px',
            margin: '20px auto',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <h3
            style={{
              color: '#FF6B6B',
              fontSize: '18px',
              marginTop: '5px',
              marginBottom: '10px',
              fontWeight: 'bold',
              alignSelf: 'center'
            }}
          >
            Appointment Details
          </h3>
          <p style={{ color: '#555', margin: '5px 0' }}>
            <strong style={{ color: '#333' }}>Date:</strong> {date}
          </p>
          <p style={{ color: '#555', margin: '5px 0' }}>
            <strong style={{ color: '#333' }}>Time:</strong> {time}
          </p>
          <p style={{ color: '#555', margin: '5px 0' }}>
            <strong style={{ color: '#333' }}>Address:</strong> {shopName},
          </p>
          <p style={{ color: '#555', margin: '5px 0' }}>
            {address1}
          </p>
          <p style={{ color: '#555', margin: '5px 0' }}>
            {address2}
          </p>
          <p style={{ color: '#555', margin: '5px 0' }}>
            <strong style={{ color: '#333' }}>Puppy:</strong> {breed}
          </p>
          <p style={{ color: '#555', margin: '5px 0' }}>
            <strong style={{ color: '#333' }}>Price:</strong> {price}
          </p>
          <p style={{ color: '#FF6B6B', margin: '5px 0', fontSize: 12 }}>
            {shortMessage}
          </p>
        </div>
        {/* Footer */}
        <div
          style={{
            margin: "5px",
            position: 'absolute',
            bottom: '5px', 
            width: '90%', 
            display: 'flex',
            fontSize: '12px', 
            flexDirection: 'column',
            alignItems: 'flex-start',

          }}
        >
          <p style={{
            color: '#F5F5F5', /* off-white color */
            alignSelf: 'center', 
          }}>
            Thank you for choosing Puppy Singapore
          </p>
        </div>
      </div>
    ),
    {
      width: 400,
      height: 790,
    }
  );
}
