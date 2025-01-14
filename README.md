## El Andariego

### Preview

![Homepage](assets/homepage.jpg)

### Repository Requirements

- nodejs (https://nodejs.org/en/download/package-manager)
- nvm (https://github.com/nvm-sh/nvm)
- python3 (https://www.python.org/downloads)
- mongodb compass (https://www.mongodb.com/try/download/shell)
- railway cli (https://docs.railway.app/guides/cli)

### Client Setup

Enter client directory

```
cd client
```

Install required node dependencies

```
npm install
```

Run client server (this runs on port 8080)

```
npm run dev
```

### Server Setup

Enter client directory

```
cd server
```

Install required node dependencies

```
npm install
```

Run client server (this runs on port 3080)

```
npm run dev
```

### Deployment

Activate python virtual env

```
source .venv/bin/activate
```

Run deploy script (follow instructions on screen)

```
python3 deploy.py
```

deactivate python virtual env

```
source .venv/bin/deactivate
```

Client:

- Tech Stack: Vite, Vue.js, Vercel
- Deploy is simple just push to main and vercel will pull latest
- Vercel takes latest code and builds it using vite (running `npm run build`)
- It then takes the output directory (dist) and serves it
- Uses node.js version 22
- Domain is CNAME record and Vercel gives the record an SSL Certificate
- Vite prefixed ENV vars are compiled into the dist folder

Server:

- Tech Stack: Node.js, Nest.js AWS
- Deploy is simple just EC2 with a custom security group (WebServerGroup)
- The security group allows https traffic to port 3040
- Port 3040 is where the nest.js app is running
- I use PM2 to run the nest.js process
- `npm run build` && `npm run start:prod` both these commands work together to build and start the server

dkjks
