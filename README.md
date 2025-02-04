# Next.js 15 - Incorrect Access of req and res in Pages Function

This repository demonstrates a common error encountered when working with Next.js 15 pages functions.  Attempting to directly access the `req` and `res` objects within a page component's functional component will result in an error because these objects are not available in this context.

This example shows how to correctly handle data fetching using `getStaticProps` or `getServerSideProps` instead of trying to access `req` and `res` directly.

## Bug

The `about.js` file attempts to access `req` and `res`, resulting in a runtime error.

## Solution

The corrected `about.js` now fetches data using `getServerSideProps` and correctly uses props.  This demonstrates the proper method of accessing request-related data in Next.js 15.

## Setup

1.  Clone this repository.
2.  Navigate to the project directory.
3.  Run `npm install` to install dependencies.
4.  Run `npm run dev` to start the development server.