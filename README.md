# MovieFriends

Author: Son Nguyen son@bachmi.com

Next.js 14 TypeScript app to demonstrate my expertise in the stack.

## Prerequisites

Node.js version >=18

## Getting Started

Copy `/.env.example` file to `.env` or `.env.local`, keeping production variables commented out.
This is important for the API fetching to work.

From root folder:

```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the local dev app running.

Configuration as pulled from version control should be sufficient to run the app.

## UI

Homepage and other dynamic pages per requirement

CSS framework for styling some components: [UIKit](https://getuikit.com)

## API Integration

Custom service to connect to API with in-header token method

Error reported to Next component at current error boundary

## User Authentication

- Using Next Auth with custom credentials provider
- Registration UI submits to backend via Server Action.
- User data is persisted to JSON flat-file to remove dependency on external database services. 
In case the default file location (`/db`) does not work, make sure to point it to a writable location in the environment file as commented.

## Routing

Using Next 13 app router

Custom middleware to restrict access to specific routes by authentication as per requirement.
Except homepage which provides UI to allow new users to register, though no other content is shown.

## Search

- UI: search-as-you-type
- Data fetching: using Server Action

## Testing

Using Jest and React Testing Library per requirement

Only includes client-side components

```bash
npm run test
```

## Deployment

Copy `.env.example` file to `.env`, enable production variables, set Next Auth URL to actual website URL, 
and set location of users data file.

```bash
npm run build
npm start
```
On production, it is recommended to launch the app as a managed service, eg. via PM2 like so:

```bash
pm2 start npm --name "moviefriends" -- start
```

Now expose port 3000 to your web server's virtual host setting (probably via a reverse proxy).

A self-hosted copy has been deployed to https://moviefriends.bachmi.com

