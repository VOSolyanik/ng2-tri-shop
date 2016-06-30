export class InMemoryService {
  /**
  * Creates fresh copy of data each time.
  * Safe for consuming service to morph arrays and objects.
  */
  createDb() {
    let categories = [
      {
        "id": 1,
        "name": "Belts"
      },
      {
        "id": 2,
        "name": "Wallets"
      },
      {
        "id": 3,
        "name": "Key Clips"
      },
      {
        "id": 4,
        "name": "Cases"
      },
      {
        "id": 5,
        "name": "Bags"
      },
      {
        "id": 6,
        "name": "Notes"
      }
    ];

    let products = [
      {
        "id": 1,
        "name": "The Commodore Belt - Black",
        "description": "This Mens belt will be with you for the rest of your life. Not only is this belt extremely durable, but it will change size if your waist changes size. Because its adjustable in size, you won’t have excess slack at the end of your belt when the leather stretches over time and you won’t ever have to add holes to it. Measures at 1.5\" thick. We use all solid brass hardware becuase of its strength, durability, its aging characteristics, and because it doesn’t cause belt rash like nickel hardware does.", 
        "imgUrl": "https://images.bigcartel.com/product_images/180234248/20160609_WindingWheel0676-9.jpg",
        "categoryId": 1,
        "price": 110,
        "isNew": true,
        "isInStock": false,
        "iLike": false
      },
      {
        "id": 2,
        "name": "The Commodore Belt - Darc Brown",
        "description": "This Mens belt will be with you for the rest of your life. Not only is this belt extremely durable, but it will change size if your waist changes size. Because its adjustable in size, you won’t have excess slack at the end of your belt when the leather stretches over time, and you won’t ever have to add holes to it. Measures at 1.5\" thick. We use all solid brass hardware becuase of its strength, durability, its aging characteristics, and because it doesn’t cause belt rash like nickel hardware does.", 
        "imgUrl": "https://images.bigcartel.com/product_images/180234221/20160609_WindingWheel0669-5.jpg",
        "categoryId": 1,
        "price": 110,
        "isNew": true,
        "isInStock": true,
        "iLike": false
      },
      {
        "id": 3,
        "name": "The Cattleman Belt - Rustic Pecan",
        "description": "A standard and extremely durable 1.5\" Belt custom fitted to your specs. Hand beveled and burnished edges. The buckle is interchangeable.", 
        "imgUrl": "https://images.bigcartel.com/product_images/180235124/20160609_WindingWheel0686-4.jpg",
        "categoryId": 1,
        "price": 100,
        "isNew": true,
        "isInStock": true,
        "iLike": false
      },
      {
        "id": 4,
        "name": "The Voyager Wallet - Black",
        "description": "Ideal for travelers, this dual-sided wallet features one slot for passports, Field Notes, Moleskins, and Winding Wheel Notes. It also has the ability to hold all iPhones (excluding the 6+). The other Pocket is ideal for travel documents and cash. It has two card slots that can fit up to three cards in each slot. The Voyager Wallet includes a complimentary Winding Wheel Moleskin Notebook. Hand stitched, beveled and burnished. Handmade to order.", 
        "imgUrl": "https://images.bigcartel.com/product_images/180175418/20160609_WindingWheel0455-1.jpg",
        "categoryId": 2,
        "price": 168,
        "isNew": true,
        "isInStock": false,
        "iLike": false
      },
      {
        "id": 5,
        "name": "The Voyager Wallet - Natural Dublin",
        "description": "This dual-sided wallet features one slot for passports, Field Notes, Moleskins, and Winding Wheel Notes. It also has the ability to hold all iPhones (excluding the 6+). The other Pocket is ideal for travel documents and cash. It has two card slots that can fit up to four cards in each slot. The Voyager Wallet includes a complimentary Winding Wheel Moleskin Notebook. Hand stitched, beveled and burnished. Handmade to order.", 
        "imgUrl": "https://images.bigcartel.com/product_images/180175769/20160609_WindingWheel0500-1.jpg",
        "categoryId": 2,
        "price": 168,
        "isNew": true,
        "isInStock": true,
        "iLike": false
      },
      {
        "id": 6,
        "name": "The Deck Wallet - Dark Brown",
        "description": "This is a simple minimalist wallet. It can fit 10 cards and some cash off the bat. But it can stretch to fit more over time if you want it to. Hand stitched & made to order.", 
        "imgUrl": "https://images.bigcartel.com/product_images/180176699/20160609_WindingWheel0583-12.jpg",
        "categoryId": 2,
        "price": 75,
        "isNew": true,
        "isInStock": false,
        "iLike": false
      },
      {
        "id": 7,
        "name": "The Deck Wallet - Natural",
        "description": "This is a simple minimalist wallet. It can fit 10 cards and some cash off the bat. But it can stretch to fit more over time if you want it to. Hand stitched & made to order.", 
        "imgUrl": "https://images.bigcartel.com/product_images/180228317/20160609_WindingWheel0521-13.jpg",
        "categoryId": 2,
        "price": 75,
        "isNew": true,
        "isInStock": true,
        "iLike": false
      },
      {
        "id": 8,
        "name": "The Tavern Wallet - Black",
        "description": "This is a simple minimalist wallet. It has two card slots in the front and a cash slot in the back. Each card slot can fit up to two cards each. Hand stitched, beveled and burnished. Made to order.", 
        "imgUrl": "https://images.bigcartel.com/product_images/180232037/20160609_WindingWheel0476-16.jpg",
        "categoryId": 2,
        "price": 75,
        "isNew": true,
        "isInStock": false,
        "iLike": false
      },
      {
        "id": 9,
        "name": "The Tavern Wallet - Natural",
        "description": "This is a simple minimalist wallet. It has two card slots in the front and a cash slot in the back. Each card slot can fit up to two cards each. Hand stitched, beveled and burnished. Made to order.", 
        "imgUrl": "https://images.bigcartel.com/product_images/180232088/20160609_WindingWheel0526-17.jpg",
        "categoryId": 2,
        "price": 75,
        "isNew": true,
        "isInStock": true,
        "iLike": false
      },
      {
        "id": 10,
        "name": "The Flagship Key Clip - Dark Brown",
        "description": "A key chain so durable you can pass it down. loop it around your belt, backpack, etc. The leather strap stays shut with a solid brass snap. From top to bottom, the key clip measures 5\" long when snapped shut. The leather strap itself is 1\" thick. Hand stamped with the Winding Wheel Supply Co. makers mark. Made to order.", 
        "imgUrl": "https://images.bigcartel.com/product_images/180881066/20160609_WindingWheel0628-5.jpg",
        "categoryId": 3,
        "price": 40,
        "isNew": true,
        "isInStock": true,
        "iLike": false
      },
      {
        "id": 11,
        "name": "The Flagship Key Clip - Black",
        "description": "A key chain so durable you can pass it down. loop it around your belt, backpack, etc. The leather strap stays shut with a solid brass snap. From top to bottom, the key clip measures 5\" long when snapped shut. The leather strap itself is 1\" thick. Hand stamped with the Winding Wheel Supply Co. makers mark. Made to order.", 
        "imgUrl": "https://images.bigcartel.com/product_images/180881360/20160609_WindingWheel0489-1.jpg",
        "categoryId": 3,
        "price": 40,
        "isNew": true,
        "isInStock": true,
        "iLike": false
      },
      {
        "id": 12,
        "name": "The Road Key Clip - Black",
        "description": "A key chain so durable you can pass it down. loop it around your belt, backpack, etc. The leather strap stays shut with a solid brass snap. From top to bottom, the key clip measures 5\" long when snapped shut. The leather strap itself is 1\" thick. Hand stamped with the Winding Wheel Supply Co. makers mark. Made to order.", 
        "imgUrl": "https://images.bigcartel.com/product_images/180881399/20160609_WindingWheel0485-1.jpg",
        "categoryId": 3,
        "price": 40,
        "isNew": true,
        "isInStock": true,
        "iLike": false
      },
      {
        "id": 13,
        "name": "The Tavern Wallet - Dark Brown",
        "description": "A key chain so durable you can pass it down. loop it around your belt, backpack, etc. The leather strap stays shut with a solid brass snap. From top to bottom, the key clip measures 5\" long when snapped shut. The leather strap itself is 1\" thick. Hand stamped with the Winding Wheel Supply Co. makers mark. Made to order.", 
        "imgUrl": "https://images.bigcartel.com/product_images/180231950/20160609_WindingWheel0596-18.jpg",
        "categoryId": 2,
        "price": 40,
        "isNew": true,
        "isInStock": true,
        "iLike": false
      },
      {
        "id": 14,
        "name": "The Bowline iPhone Sleeve - English Tan",
        "description": "A simple and elegant iPhone sleeve that fits snug. Choose between iPhone 5, 5s, 6, 6+. Hand stitched, beveled and burnished. Made to order.", 
        "imgUrl": "https://images.bigcartel.com/product_images/180178280/20160609_WindingWheel0400-6.jpg",
        "categoryId": 4,
        "price": 85,
        "isNew": true,
        "isInStock": true,
        "iLike": false
      },
      {
        "id": 15,
        "name": "The Bowline iPhone Sleeve - Natural Dublin",
        "description": "A key chain so durable you can pass it down. loop it around your belt, backpack, etc. The leather strap stays shut with a solid brass snap. From top to bottom, the key clip measures 5\" long when snapped shut. The leather strap itself is 1\" thick. Hand stamped with the Winding Wheel Supply Co. makers mark. Made to order.", 
        "imgUrl": "https://images.bigcartel.com/product_images/180230555/20160609_WindingWheel0504-5.jpg",
        "categoryId": 4,
        "price": 85,
        "isNew": true,
        "isInStock": true,
        "iLike": false
      },
      {
        "id": 16,
        "name": "The Jefferson Key Case - Natural Dublin",
        "description": "Keep your keys perfectly organized with this simple minimalist Key Case. It can fit 6 standard size keys off the bat, but can fit more if you double or triple up on each hook. It can fit at least one thick car remote key. Use it on your key clip, key chain, or just stick it in your front or back pocket. Made to order.", 
        "imgUrl": "https://images.bigcartel.com/product_images/180233531/20160609_WindingWheel0529-20.jpg",
        "categoryId": 4,
        "price": 42,
        "isNew": true,
        "isInStock": true,
        "iLike": false
      },
      {
        "id": 17,
        "name": "Traveling Necklace Book - Black",
        "description": "For organizing and securing necklaces for travel. Soft, durable black leather. Hand crafted and hand stitched in Salt Lake City, UT U.S.A.", 
        "imgUrl": "https://images.bigcartel.com/product_images/162410290/Mikaela_Hamilton-_CTWF_travel-wldflwr.ink-1.jpg",
        "categoryId": 4,
        "price": 198,
        "isNew": true,
        "isInStock": true,
        "iLike": false
      },
      {
        "id": 18,
        "name": "The Ballaster Stick Roll - Rustic Brown",
        "description": "Not your typical stick bag. This stick roll is easy to roll up and carry with you anywhere. Not only is it portable, but it is very secure. Your sticks and mallets won't go anywhere. It can fit more than a brick (12 pairs) of drum sticks including a few pairs of mallets, brushes, etc. Being made in the USA out of thick leather and premium USA materials,It is the most durable stick bag available and will out last canvas and nylon stick bags by far. Buy it once, not 20 times like other stick bags. Measures 23\"x23\" when completely opened. The closed size will change depending on what is in side. There are now 4 pockets instead of the 2 that are pictured to secure the sticks better when the bag is open. Color may vary slightly from the picture shown. Hand cut, treated, stitched, and riveted. Made to order & comes with a lifetime warranty.", 
        "imgUrl": "https://images.bigcartel.com/product_images/148173982/10_Drum_Stick_Roll_Detail.jpg",
        "categoryId": 5,
        "price": 320,
        "isNew": true,
        "isInStock": true,
        "iLike": false
      },
      {
        "id": 19,
        "name": "The Ballaster Tool Roll - Rustic Brown",
        "description": "Made out of 5oz Rustic Dark Brown Cowhide leather, this tool roll will be something you can past down. This tough tool roll has six 2.5\" pockets and one 5\" pocket. Each line of stitching is reinforced with raw copper rivets on each side for added strength and durability. Can fit up to a 8\" long tool. Great for everyday tools, pens, barbering shears, brushes, knitting needle, etc. If you're needing something a bit more custom, no problem! Just send us an email WindingWheelSupply@gmail.com and we will do our best to accommodate you. Hand cut, treated, stitched, and riveted. Measures 23\"x23\" when completely opened. The closed size will change depending on what is in side.", 
        "imgUrl": "https://images.bigcartel.com/product_images/180174839/20160609_WindingWheel0765-1.jpg",
        "categoryId": 5,
        "price": 250,
        "isNew": true,
        "isInStock": true,
        "iLike": false
      },
      {
        "id": 20,
        "name": "Winding Wheel Notes - 3 Pack",
        "description": "A pack of 3 replacement 3.5\"x5.5\" Note books for \"The Voyager Wallet\". Field Notes sized.", 
        "imgUrl": "https://images.bigcartel.com/product_images/180174188/20160609_WindingWheel0636-2.jpg",
        "categoryId": 6,
        "price": 16,
        "isNew": true,
        "isInStock": true,
        "iLike": false
      },
    ]

    return { categories, products };
  }
}