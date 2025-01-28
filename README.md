# Subscribe Backend
1. Install dependencies via `yarn` or `npm install`
2. Run `docker-compose up -d` to start mysql
3. Create database schema via `npx mikro-orm schema:create -r`. This will also create the 
   database if it does not exist.
4. Run via `yarn start` or `yarn start:dev` (nodemon)
5. API is running on http://localhost:3001

Available routes:

```
POST    /mail        creates new mail
```
body example:
```json
{
	"address": "example@google.com"
}
```