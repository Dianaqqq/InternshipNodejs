import {Request, Response, Router} from "express";
const request = require('request');

import Accessor = require("esri/core/Accessor");

import { subclass, declared } from "esri/core/accessorSupport/decorators";



const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    // const reqq = new Request('https://api.darksky.net/forecast/d5c6a119a01d422c9dd66275fe455184/42.3601,-71.0589');

    let temperature: number = 0;
    let timezone: string = '';

    request('https://api.darksky.net/forecast/d5c6a119a01d422c9dd66275fe455184/42.3601,-71.0589', function (err: any, resp: any, body: any) {
        console.log(body);
        console.log(JSON.parse(body));
        let bodyJson = JSON.parse(body);

        temperature = bodyJson.currently.temperature;
        timezone = bodyJson.timezone;

        res.json(`'temperature: '${temperature}, 'timezone: ' ${timezone}`);
    });


    // res.json(" ");

});


// fetch(myRequest)
//     .then(response => response.blob())
//     .then(blob => {
//         myImage.src = URL.createObjectURL(blob);
//     });
//


// const myRequest = new Request('http://localhost/flowers.jpg');
//
// const myURL = myRequest.url; // http://localhost/flowers.jpg
// const myMethod = myRequest.method; // GET
// const myCred = myRequest.credentials; // omit
//
//



// function getWeather() {
//     const endpoint = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=44db6a862fba0b067b1930da0d769e98';
//     return this.http
//         .get(endpoint)//, {search: searchParams})
//         .map(res => res.json().main)
//         .subscribe(res => {
//             this.weather = data;
//         });
// }

export const WeatherController = router;