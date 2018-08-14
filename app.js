const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
	if (errorMessage){
		console.log(errorMessage)
	}
	else{
		console.log(JSON.stringify(results, undefined, 2));
	}
});

// function add(a,b,callback){
// 	console.log(`${a+b}`);
// 	callback();
// }

// function dispo(){
// 	console.log('that works');
// }

// add(1,2,dispo);

var promise = new Promise((resolve, reject)=>{
	console.log('i am in promise');
	resolve('ok');
	// reject ('notOK');
})

promise
.then((result)=> console.log(result))
.catch((error) => console.log(error));