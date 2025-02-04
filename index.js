```javascript
// pages/about.js

export async function getServerSideProps(context) {
  // Fetch data from API here using context.req
  // const res = await fetch('your-api-endpoint');
  // const data = await res.json();

  return {
    props: {
      // Pass any data to the component
      // message: data.message,
    },
  };
}

export default function About({ message }) {
  // message will be available here now
  return (
    <div>
      <h1>About Page</h1>
      {/* {message && <p>{message}</p>} */}
    </div>
  );
}
```
```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```