const samplePostings = [
  {
    title: "iPhone 13",
    description: "128GB, excellent condition, battery health 89%.",
    price: 42000,
    location: "Hyderabad",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5",
        filename: "iphone13-1",
      },
    ],
  },
  {
    title: "Samsung Galaxy S22",
    description: "256GB, no scratches, original charger included.",
    price: 36000,
    location: "Bengaluru",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
        filename: "galaxys22-1",
      },
    ],
  },
  {
    title: "OnePlus 11",
    description: "8GB RAM, 128GB storage, like new.",
    price: 33000,
    location: "Chennai",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
        filename: "oneplus11-1",
      },
    ],
  },
  {
    title: "MacBook Air M1",
    description: "2022 model, 8GB RAM, 256GB SSD.",
    price: 62000,
    location: "Hyderabad",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
        filename: "mba-m1-1",
      },
    ],
  },
  {
    title: "Dell Inspiron Laptop",
    description: "Intel i5, 16GB RAM, 512GB SSD.",
    price: 38000,
    location: "Pune",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        filename: "dell-1",
      },
    ],
  },
  {
    title: "HP Pavilion Gaming Laptop",
    description: "GTX 1650, Ryzen 5, 512GB SSD.",
    price: 48000,
    location: "Mumbai",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        filename: "hpgaming-1",
      },
    ],
  },
  {
    title: "Sony PlayStation 5",
    description: "Disc Edition with one controller.",
    price: 42000,
    location: "Delhi",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
        filename: "ps5-1",
      },
    ],
  },
  {
    title: "Xbox Series X",
    description: "Excellent condition with original accessories.",
    price: 39000,
    location: "Hyderabad",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
        filename: "xboxx-1",
      },
    ],
  },
  {
    title: "Apple iPad Air",
    description: "64GB Wi-Fi model, barely used.",
    price: 35000,
    location: "Kochi",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
        filename: "ipadair-1",
      },
    ],
  },
  {
    title: "Samsung Galaxy Tab S8",
    description: "Comes with S Pen and cover.",
    price: 41000,
    location: "Chennai",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9",
        filename: "tabs8-1",
      },
    ],
  },
  {
    title: "Canon EOS 1500D",
    description: "DSLR with 18-55mm kit lens.",
    price: 26000,
    location: "Visakhapatnam",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
        filename: "canon1500d-1",
      },
    ],
  },
  {
    title: "Sony Alpha A6400",
    description: "Mirrorless camera in great condition.",
    price: 62000,
    location: "Hyderabad",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39",
        filename: "sony6400-1",
      },
    ],
  },
  {
    title: "JBL Flip 6 Speaker",
    description: "Portable Bluetooth speaker.",
    price: 7000,
    location: "Nagpur",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
        filename: "jblflip6-1",
      },
    ],
  },
  {
    title: "Boat Airdopes 441",
    description: "Wireless earbuds with charging case.",
    price: 1800,
    location: "Hyderabad",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46",
        filename: "airdopes441-1",
      },
    ],
  },
  {
    title: "Apple Watch Series 8",
    description: "45mm GPS model.",
    price: 27000,
    location: "Bengaluru",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1579586337278-3f436f25d4d6",
        filename: "watch8-1",
      },
    ],
  },
  {
    title: "Samsung Smart TV 43 Inch",
    description: "4K UHD, one year old.",
    price: 24000,
    location: "Hyderabad",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
        filename: "tv43-1",
      },
    ],
  },
  {
    title: "LG Washing Machine",
    description: "Front load, 6.5kg.",
    price: 14000,
    location: "Pune",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1",
        filename: "washing1",
      },
    ],
  },
  {
    title: "Whirlpool Refrigerator",
    description: "Double door, 340L.",
    price: 18000,
    location: "Mumbai",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30",
        filename: "fridge1",
      },
    ],
  },
  {
    title: "Honda Activa 6G",
    description: "2022 model, single owner.",
    price: 70000,
    location: "Hyderabad",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
        filename: "activa6g-1",
      },
    ],
  },
  {
    title: "Royal Enfield Classic 350",
    description: "Well maintained with service history.",
    price: 145000,
    location: "Bengaluru",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6",
        filename: "classic350-1",
      },
    ],
  },
  {
    title: "Yamaha R15 V4",
    description: "Sports bike, excellent condition.",
    price: 165000,
    location: "Chennai",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96",
        filename: "r15v4-1",
      },
    ],
  },
  {
    title: "Maruti Suzuki Swift",
    description: "2019 model, petrol, first owner.",
    price: 520000,
    location: "Hyderabad",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
        filename: "swift2019-1",
      },
    ],
  },
  {
    title: "Hyundai i20",
    description: "2020 model with insurance.",
    price: 650000,
    location: "Delhi",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
        filename: "i20-1",
      },
    ],
  },
  {
    title: "Amazon Kindle Paperwhite",
    description: "10th Gen, 8GB storage.",
    price: 8000,
    location: "Hyderabad",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
        filename: "kindle1",
      },
    ],
  },
  {
    title: "DJI Mini 2 Drone",
    description: "Fly More Combo.",
    price: 39000,
    location: "Goa",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1473968512647-3e447244af8f",
        filename: "drone1",
      },
    ],
  },
  {
    title: "Asus Gaming Monitor",
    description: "27-inch, 165Hz refresh rate.",
    price: 18000,
    location: "Hyderabad",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc",
        filename: "monitor1",
      },
    ],
  },
  {
    title: "Mechanical Keyboard",
    description: "RGB backlit, blue switches.",
    price: 3500,
    location: "Ahmedabad",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
        filename: "keyboard1",
      },
    ],
  },
  {
    title: "Logitech MX Master 3",
    description: "Wireless productivity mouse.",
    price: 6500,
    location: "Hyderabad",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1527814050087-3793815479db",
        filename: "mxmaster3",
      },
    ],
  },
  {
    title: "Dell 24-inch Monitor",
    description: "Full HD IPS display.",
    price: 9500,
    location: "Jaipur",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        filename: "dellmonitor",
      },
    ],
  },
  {
    title: "GoPro Hero 10",
    description: "Action camera with accessories.",
    price: 29000,
    location: "Hyderabad",
    country: "India",
    image: [
      {
        url: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
        filename: "gopro10",
      },
    ],
  },
];

module.exports = { data : samplePostings};