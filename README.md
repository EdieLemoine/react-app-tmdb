This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Usage

This project manages its Node and Yarn versions with [Volta](https://volta.sh/). When Volta is installed, it will automatically use the correct versions of Node and Yarn in this project.

### Installation

First, copy the `.env.local.template` file to `.env.local` and fill in the `TMDB_API_KEY` env variable.

```bash
cp .env.local.template .env.local

# Now fill in the TMDB_API_KEY variable
```

Then, install the dependencies:

```bash
yarn install
```

And run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.
