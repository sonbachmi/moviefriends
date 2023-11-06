# MovieFriends
Author: Son Nguyen son@bachmi.com

Next.js 14 app to implement job assignment from FFW Agency

## Prerequisites
Node.js version >=18

## Getting Started

From root folder:

```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the local dev app running. 
Log in as username `user` and password `user`. 

Configuration as pulled from version control should be sufficient to run the app.

## UI

Homepage and other dynamic pages per requirement

CSS framework for styling some components: [UIKit](https://getuikit.com)

## API Integration

Custom service to connect to API with in-header token method

Error reported to Next component at current error boundary

## User Authentication

Using Next Auth with custom credentials provider

Registration UI present but no persistence layer, so use fixed credentials for testing as above.

## Routing

Using Next 13 app router

Custom middleware to restrict access to all public pages by authentication as per requirement.
Except homepage which provides UI to allow new users to register. 

## Search

UI to search-as-you-type using Server Action

## Testing

Unit testing Using Jest and React Testing Library per requirement

Only includes client-side components due to time constraint

```bash
npm run test
```

## Deployment

```bash
npm run build
```

A copy has been deployed to Vercel at https://moviefriends.vercel.app
