"use client";
// import { useClient } from 'react/server';
import ClientHome from './ClientHome'; // Import the client component

export default function Home() {
//   useClient(() => {
//     // Server component logic (if needed)
//   });

  return (
    <div>
      <ClientHome /> {/* Use the client component here */}
    </div>
  );
}
