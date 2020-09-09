const express = require("express");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const apiRouters = require("./api-routers");
const limiter = rateLimit({ // Security measure - limit connections (DDoS)
    windowMs: 10000,
    max: 200,
    message: "Too many requests from this IP, please try again"
});
const { TABLES, TABLES_ID_KEY } = require("./consts"); //TODO - DELETE
const { createRedisClient, insertToTable } = require("./redisConnector");
const { registerNewUser } = require("./services/users-service"); //TODO - DELETE
const { registerNewActivity, findUserCheckout, findAllActivities } = require("./services/activities-service");
const { findAllLaptops, registerNewLaptop } = require("./services/laptops-service");
const { registerNewContact, findAllContacts, updateContactActive } = require("./services/contact-service");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "localhost" }));
app.use(morgan());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
    session({
        key: "user_sid",
        secret: process.env.COOKIE,
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 1000 * 60 * 5 // 5 minutes
        },
        rolling: true
    })
);
app.use(limiter);

app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie("user_sid");
    }
    next();
});

app.use("/img", express.static(path.join(__dirname, "../assets/img")));
app.use("/api", apiRouters);

createRedisClient();
//insertToTable("adi@gmail.com", {"name": "adi"});
//insertToTable("hadar@gmail.com", {"name": "hadar"});

let user = {
    password: "1231",
    firstName: "Alon",
    lastName: "hOW",
    email: "ADI@GMAIL.COM"
};

const activity = {
    name: "add-to-cart",
    description: "bla",
    userEmail: "adi@gmail.com",
    time: "time"
};

//registerNewUser(user);
//registerNewActivity(activity);

user = {
    password: "1231",
    firstName: "Alon",
    lastName: "hOW",
    userEmail: "adi@gmail.com"
};

//let laptops = findAllLaptops();

const contact = {
    name: "Adi",
    email: "adi@gmail.com",
    phoneNumber: "0546534345",
    description: "kjhgdfsdfsd",
    time: "19931-54",
    active: true
};

//updateContactActive("ba85d5b2-c1f8-4fda-8608-2957b1a2a479");

//let userCheckout = findUserCheckout(user);

//let allActivities = findAllActivities();

//console.log("All activities: " + allActivities);

//bootMongo();
const laptops = [
    {
        "laptop_id": "5f523993ca0c0b9b00f13ad4",
        "image": "img/apple.jpg",
        "title": "Macbook-Pro",
        "price": "3000"
        ,
        "info": "Apple laptop with i5 processor, 16GB memory, 1TB SSD fast hard drive, 13.3 Retina screen, Intel Iris Plus Graphics accelerator, bright keyboard and Touch Bar."
    },
    {
        "laptop_id": "5f53fc543c019126ca54cfe7",
        "image": "img/dell.jpg",
        "title": "Dell-Inspiron",
        "price": "1950",
        "info": "Inspiron 15-3593 laptop Dell laptop with i7-1065G7 processor, 16GB memory, 512GB SSD fast hard drive, 15.6 \" screen and Nvidia GeForce MX230 graphics accelerator."
    },
    {
        "laptop_id": "5f53fc5b3c019126ca54cfe8",
        "image": "img/samsung.jpg",
        "title": "Samsung-Galaxy",
        "price": "2500",
        "info": "Computer - Tablet from Samsung with i5-7200U processor, 8GB memory, 256GB SSD fast hard drive, 12 \"touch screen and SIM card support. Comes with S-Pen and keyboard cover."
    },
    {
        "laptop_id": "5f53fd583c019126ca54cfe9",
        "image": "img/hp.jpg",
        "title": "Pavilion-Gaming-16",
        "price": "1900",
        "info": "HP laptop with i5-10300H processor, 16GB memory, 512GB SSD hard drive, 16.1 \"screen, Nvidia GeForce GTX1650 graphics accelerator and bright keyboard."
    },
    {
        "laptop_id": "5f53fd5d3c019126ca54cfea",
        "image": "img/acer.jpg",
        "title": "Acer-Aspire",
        "price": "550",
        "info": "Acer Laptop Intel®️ Celeron N4000 Processor 14 \"Screen 64GB eMMC 4GB DDR4 Memory Graphics Accelerator Intel UHD Graphics 600"
    },
    {
        "laptop_id": "5f53fd613c019126ca54cfeb",
        "image": "img/msi.jpg",
        "title": "Msi-GP75",
        "price": "340",
        "info": "17.3\" MSI GP75 9SD Laptop. FHD16GB DDR4 memory"
    },
    {
        "laptop_id": "5f5400373c019126ca54cfec",
        "image": "img/toshiba.jpg",
        "title": "Toshiba-Satellite",
        "price": "500",
        "info": "Windows 10 Pro 64-bit Sixth generation Intel®️ Core ™️ i3-6006U processor 35.6 cm (14.0 inches), non-reflective HD display with 16: 9 aspect ratio and LED backlight 128 GB Solid State Drive"
    },
    {
        "laptop_id": "5f54003b3c019126ca54cfed",
        "image": "img/xiaomi.jpg",
        "title": "Xiaomi-RedmiBook",
        "price": "1000",
        "info": "Xiaomi RedmiBook 16 Laptop AMD Ryzen 4700U/4500U 16.1 Inch Full Screen Display 100% sRGB 8GB/16GB DDR4 512GB SSD Notebook 65W Type-C Charger Computer - Gray AMD-Ryzen 7 16G DDR4 512G SSD"
    },
    {
        "laptop_id": "5f54003f3c019126ca54cfee",
        "image": "img/lenovo.jpg",
        "title": "Lenovo-Yoga-920",
        "price": "1600",
        "info": "Lenovo laptop with i5-8250U processor, 8GB memory, 256GB SSD hard drive, 13.9 \"touch screen and Intel UHD Graphics 620 graphics accelerator"
    },
    {
        "laptop_id": "5f54024b3c019126ca54cfef",
        "image": "img/microsoft.jpg",
        "title": "Microsoft-Surface",
        "price": "2000",
        "info": "The 12.3\" touchscreen 2-in-1 laptop that’s ultra-light and versatile"
    },
    {
        "laptop_id": "5f54031e3c019126ca54cff0",
        "image": "img/teclast.jpg",
        "title": "Teclast-F7-Plus",
        "price": "360",
        "info": "TECLAST F7 Plus 14.1“ Windows 10 Laptop,7mm Ultra Thin Metal Body,8GB RAM 256GB ROM,1920x1080P FHD IPS Intel Quad Core Laptop Computer Backlit Keyboard Notebook AC WiFi USB3.0 BT4.2 Support Linux"
    },
    {
        "laptop_id": "5f5403233c019126ca54cff1",
        "image": "img/lg.jpg",
        "title": "LG-Gram",
        "price": "1800",
        "info": "LG gram 17'' Ultra-Lightweight Laptop with 10th Gen Intel®️ Core™️ Processor w/Intel Iris®️ Plus®️"
    }
  ];

   for(i in laptops) {
     registerNewLaptop(laptops[i]);
 }

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
app.on('connect', () => {
    console.log('Connected to Redis...')
  });