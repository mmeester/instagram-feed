let ig = require('instagram-scraping'), 
    collect = require("collect.js");
const NodeCache = require( "node-cache" );
    
const ttl = 60 * 60 * process.env.CACHE;
const cache = new NodeCache({ stdTTL: ttl, checkperiod: ttl * 0.2, useClones: false });

module.exports = {
  getFeed: function(req, res) {
    
    const items = cache.get('insta');
    if (items) {
      res.send(items)
    }else {
      ig.scrapeUserPage(process.env.INSTAGRAM_USER).then(data => {
      
        let i = 0;
        
        const output = collect([]);

        const collection = collect(data.medias);
        collection.each(item => {
          // if (i > 5) return false;

          output.push({
            image: item.display_url,
            text: item.text,
            likes: item.like_count
          });
          i++;
        });
        
        cache.set('insta', output.items);
        res.send(output.items);
        
      });
    }
    
  }
}