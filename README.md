## Las Costas

### Preview

![Homepage](assets/homepage.jpg)

## Information

### Client
- Tech Stack: Vite, Vue.js, Vercel
- Deploy is simple just push to main and vercel will pull latest
- Vercel takes latest code and builds it using vite (running `npm run build`)
- It then takes the output directory (dist) and serves it
- Uses node.js version 22
- Domain is CNAME record and Vercel gives the record an SSL Certificate (so does cloudflare)
- Vite prefixed ENV vars are compiled into the dist folder

### Server
- Tech Stack: Node.js, Nest.js AWS
- Deploy is simple just EC2 with a custom security group (WebServerGroup)
- The security group allows https traffic to port 3040
- Port 3040 is where the nest.js app is running
- I use PM2 to run the nest.js process
- `npm run build` && `npm run start:prod` both these commands work together to build and start the server
- Nginx acts as a reverse proxy to port 3040
- Any nginx errors are logged here:
```
error_log /var/log/nginx/costas_error.log;
access_log /var/log/nginx/costas_access.log;
```

## Deployment

### Client
1. Create pull request
2. Review code
3. Merge to main branch
4. Github action runs and pushes to vercel

### Server
1. Create pull request
2. Review code
3. Merge to main branch
4. Github action runs and pushes to prod EC2

## Setup

### Client
#### Requirements
- [Node.js](https://nodejs.org/en/download)
- [nvm](https://github.com/nvm-sh/nvm)

Install required dependencies

```
npm install
```

Run client-server (port: 8080)

```
npm run dev
```

### Server
#### Requirements
- [Node.js](https://nodejs.org/en/download)
- [nvm](https://github.com/nvm-sh/nvm)

Install required dependencies

```
npm install
```

Run client-server (port: 8000)

```
npm run start:dev
```
