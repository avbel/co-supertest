[Unsuported]

It allows to make supetest requests inside generators like
```
let result = yield supertest(app).get(url).end();
```

for supertest 1.0. It is not required for supertest 2.0+.

With supertest 2.0+ you can use next code without additional libraries.

```js
request.get('/search').expect(200).then(success, failure);

//with co 1.0
yield supertest(app).get('url').expect(200);

//with async/await (co 2.0+, TypeScript, ES7, etc)
await supertest(app).get('url').expect(200); 
```

Install
=================
```
npm install co-supertest supertest
```
