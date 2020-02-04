# Instagram feed for your website with NodeJS

Showing your own Instagram posts on your website can be a pain in the ass since Instagram killed it's public api, this small piece of code creates an easy and small api to fetch your instagram posts and get them back in a json format. 

## Install
Rename your `.env.example` => `.env` and change the variables:

- `INSTAGRAM_USER=mmeester` => The instagram username you want to scrape from
- `WHITELIST=/\.e-mmer\.nl$/` => The whitelisted url to fetch the api from because of CORS
- `CACHE=0` => the amount of hours you wish to cache the posts, please be aware that a new post won't flushes the cache, to disable use `0`

1. npm install
2. npm run dev
3. visit the [feed](http://localhost:8963/instagram/feed) to confirm posts are fetched and send back by json

For production use `npm start`

### Please Note
The profile you want to show the pictures from needs to be public to scrape!