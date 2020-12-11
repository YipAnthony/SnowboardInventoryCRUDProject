#! /usr/bin/env node

console.log('Populates database with initial items');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);


// if (!userArgs[0].startsWith('mongodb')) {
//     console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
//     return
// }

var async = require('async')
var Snowboard = require('./models/snowboard')
var SnowboardItem = require('./models/snowboardItem')
var Boots = require('./models/boots')
var Brand = require('./models/brand')
var Bindings = require('./models/bindings')


var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://Testuser1:123123123@cluster0.nyr2q.mongodb.net/snowboardCRUD?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var snowboards = []
var snowboardItems = []
var boots = []
var brands = []
var bindings = []

function snowboardCreate(brand, bend, shape, mount, name, externalLink, price, cb) {

    snowboarddetail = {
      brand: brand,
      bend: bend,
      shape: shape,
      mount: mount,
      name: name, 
      externalLink: externalLink,
      price: price,
    }
  
  var snowboard = new Snowboard(snowboarddetail);
       
  snowboard.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Snowboard: ' + snowboard);
    snowboards.push(snowboard)
    cb(null, snowboard)
  }  );
}

function snowboardItemCreate(snowboard, length, cb) {

    snowboardItemDetail = {
        snowboard: snowboard, 
        length: length
    }

    const snowboardItem = new SnowboardItem(snowboardItemDetail)
    snowboardItem.save(function(err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('New Snowboard Item' + snowboardItem)
        snowboardItems.push(snowboardItem)
        cb(null, snowboardItem)
    })
}

function brandCreate(name, cb) {
  var brand = new Brand({ name: name });
       
  brand.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Brand: ' + brand);
    brands.push(brand)
    cb(null, brand);
  }   );
}

function bootCreate(brand, externalLink, flex, lacing, price, size, stock, cb) {
  bootdetail = { 
    brand: brand,
    externalLink: externalLink,
    flex: flex,
    lacing: lacing,
    price: price,
    size: size,
    stock: stock,
  }
    
  var boot = new Boots(bootdetail);    
  boot.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Boot: ' + boot);
    boots.push(boot)
    cb(null, boot)
  }  );
}


function bindingsCreate(brand, size, flex, type, externalLink, mount, price, stock, cb) {
  bindingsdetail = { 
    brand: brand,
    size: size,
    flex: flex,
    type: type, 
    externalLink: externalLink,
    mount: mount, 
    price: price, 
    stock: stock
  }    
    
  var binding = new Bindings(bindingsdetail);    
  binding.save(function (err) {
    if (err) {
      console.log('ERROR CREATING Binding: ' + binding);
      cb(err, null)
      return
    }
    console.log('New binding: ' + binding);
    bindings.push(binding)
    cb(null, binding)
  }  );
}


function createBrands(cb) {
    async.series([
        function(callback) {
            brandCreate('Ride', callback)    
        },
        function(callback) {
            brandCreate('Burton', callback)    
        },
        function(callback) {
            brandCreate('Gnu', callback)    
        },
        function(callback) {
            brandCreate('Arbor', callback)    
        },
        function(callback) {
            brandCreate('Roxy', callback)    
        },
        function(callback) {
            brandCreate('Lib Tech', callback)    
        },
        function(callback) {
            brandCreate('RAVE METER', callback)    
        },
        function(callback) {
            brandCreate('Rome', callback)    
        },
        function(callback) {
            brandCreate('Nitro', callback)    
        },
        function(callback) {
            brandCreate('K2', callback)    
        },
        function(callback) {
            brandCreate('Never Summer', callback)    
        },
        function(callback) {
            brandCreate('Public', callback)    
        },
        function(callback) {
            brandCreate('Salomon', callback)    
        },
        function(callback) {
            brandCreate('Battalion', callback)    
        },
        function(callback) {
            brandCreate('Jones', callback)    
        },
        function(callback) {
            brandCreate('Franco', callback)    
        },
        function(callback) {
            brandCreate('DC', callback)    
        },
        function(callback) {
            brandCreate('Capita', callback)    
        },
        function(callback) {
            brandCreate('Rossignol', callback)    
        },
        ],
        // optional callback
        cb);
}

function createSnowboards(cb) {
    async.parallel([
        function(callback) {
            snowboardCreate(
                brands[12], 'Hybrid', 'Directional', '2x4', 'Dancehaul', 
                'https://www.salomon.com/en-us/shop/product/dancehaul.html?CMPID=pla%7css%7cgoogle%7c%7cAll+Products%7c%7c394680659891&utm_source=google&utm_medium=paidsearch&utm_content=aa80365929245-cc394680659891&utm_keyword=&utm_campaign=&gclid=CjwKCAiAiML-BRAAEiwAuWVggrTWMV9anCssXjQRq3QoTVgzw-GYkCCTKHZ89a6DqkOs0TPDMO7YZxoCoDAQAvD_BwE#color=22437&size=4798',
                '449.95', callback
            );
        },
        function(callback) {
            snowboardCreate(
                brands[9], 'Camber', 'Directional', '2x4', 'Alchemist', 'https://k2snow.com/en-us/p/k2-alchemist-mens-snowboard', '699.95', callback
            );
        },
        function(callback) {
            snowboardCreate(
                brands[2], 'Camber', 'Directional', '2x4', 'Barrett', 'https://www.gnu.com/barrett', '599.99', callback
            );
        },
        function(callback) {
            snowboardCreate(
                brands[7], 'Camber', 'Twin', '2x4', 'Artifact', 'https://romesnowboards.com/products/artifact-snowboard-2020-2021', '399.95', callback
            );
        },
        function(callback) {
            snowboardCreate(
                brands[0], 'Hybrid', 'Directional', '2x4', 'Back Talk', 'https://ridesnowboards.com/en-us/p/back-talk-snowboard', '469.95', callback
            );
        },
        function(callback) {
            snowboardCreate(
                brands[12], 'Hybrid', 'Twin', '2x4', 'No Drama', 'https://www.salomon.com/en-us/shop/product/no-drama.html#color=22546', '449.95', callback
            );
        },
        function(callback) {
            snowboardCreate(
                brands[13], 'Hybrid', 'Directional', '2x4', 'Solution Splitboard', 'https://www.jonessnowboards.com/splitboarding/522-3403-solution-splitboard.html', '899.95', callback
            );
        }        
        ],
        // optional callback
        cb);
}

function createSnowboardItems(cb) {
    async.parallel([
        function(callback) {
            snowboardItemCreate(snowboards[0], 154, callback)
        }, 
        function(callback) {
            snowboardItemCreate(snowboards[0], 154, callback)
        }, 
        function(callback) {
            snowboardItemCreate(snowboards[0], 153, callback)
        }, 
        function(callback) {
            snowboardItemCreate(snowboards[0], 160, callback)
        }, 
        function(callback) {
            snowboardItemCreate(snowboards[0], 165, callback)
        }, 
        function(callback) {
            snowboardItemCreate(snowboards[0], 150, callback)
        }, 
        function(callback) {
            snowboardItemCreate(snowboards[1], 154, callback)
        }, 
        function(callback) {
            snowboardItemCreate(snowboards[1], 154, callback)
        }, 
        function(callback) {
            snowboardItemCreate(snowboards[1], 150, callback)
        }, 
        function(callback) {
            snowboardItemCreate(snowboards[1], 160, callback)
        }, 
        function(callback) {
            snowboardItemCreate(snowboards[1], 165, callback)
        }, 
        function(callback) {
            snowboardItemCreate(snowboards[2], 158, callback)
        }, 
        function(callback) {
            snowboardItemCreate(snowboards[2], 158, callback)
        }, 
        function(callback) {
            snowboardItemCreate(snowboards[2], 160, callback)
        }, 
        function(callback) {
            snowboardItemCreate(snowboards[2], 160, callback)
        }, 
        function(callback) {
            snowboardItemCreate(snowboards[2], 154, callback)
        }, 
        function(callback) {
            snowboardItemCreate(snowboards[3], 154, callback)
        }, 
        function(callback) {
            snowboardItemCreate(snowboards[3], 154, callback)
        }, 
        function(callback) {
            snowboardItemCreate(snowboards[3], 154, callback)
        }, 
        function(callback) {
            snowboardItemCreate(snowboards[3], 154, callback)
        }, 
        function(callback) {
            snowboardItemCreate(snowboards[3], 159, callback)
        }, 
        function(callback) {
            snowboardItemCreate(snowboards[4], 154, callback)
        }, 
        function(callback) {
            snowboardItemCreate(snowboards[4], 154, callback)
        }, 
        function(callback) {
            snowboardItemCreate(snowboards[6], 154, callback)
        }, 
    ], cb)
}



async.series([
    createBrands,
    createSnowboards,
    createSnowboardItems,
    // createBookInstances
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('BOOKInstances: '+bookinstances);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});



