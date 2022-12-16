# Description

> Demo Full-stack project deployed at [Vercel Cloud](). It has CRUD features (Create, Read, Update, Delete) built with [Next.js](https://nextjs.org/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Tech Stack

#### Front-end

- Next.js
- TypeScript
- React
- Sass
- HTML 5
- CSS 3
- Local Storage
- JavaScript

#### Back-end

- Next.js
- Node.js
- TypeScript

---

## Getting Started

1.  Install the dependencies with:

    ```bash
    npm install
    # or
    yarn install
    ```

2.  Set the required configuration environmental variables by:

    - creating a `.env.local` file
    - set the NEXT_PUBLIC_HOST to `http://localhost:3000`

3.  Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Now you can start to modify the files and the dev live-server will auto-update the result in the browser.

## Folder structure

    - Public static content is placed inside the `/public` folder which is mapped to `/*`
    - The pages/routes are placed inside the `/pages` folder which is mapped to `/*`
    - The re-usable components/modules are placed inside `/components` to be consumed from inside the pages/routes.
    - There are some script utilities inside the `/helpers` folder.
    - Inside the `/config` folder there is a configuration object that loads some variables/constants in order to be used within the app.
    - The API Routes are placed inside the `/pages/api` folder which is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) rather than React Pages. e.g. [http://localhost:3000/api/goals](http://localhost:3000/api/goals). This endpoint can be edited in `pages/api/goals.ts`.

## Learn More

    To learn more about Next.js, take a look at the following resources:

    - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
    - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
    - [API routes](https://nextjs.org/docs/api-routes/introduction) - Introduction to Next.js API Routes
    - [the Next.js GitHub repository](https://github.com/vercel/next.js/)

## Deploy on Vercel

    For deployment, we use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

    However, there is another interesting alternative we'll explore: [Metacall.io](https://metacall.io).

    Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
