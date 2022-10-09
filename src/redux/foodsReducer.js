import uniqid from "uniqid";
const { createSlice } = require("@reduxjs/toolkit");

const foodsSlice = createSlice({
  name: "foods",
  initialState: {
    foods: [
      {
        id: uniqid(),
        nameOfFood: "Big Mac Burger",
        category: "Burger",
        text: `Double Treat!! True To The Core, Authentic Grilled Burger With 2 Decks Of Smothered Grilled Chicken Patties Covered With Cheese two Slices, Glazy Caramelized Onions & Original Smokey Legacy Sauce.`,
        oldPrice: 15,
        newPrice: 12,
        readyTime:30,
        quantity:1,
        img: "https://www.ladbible.com/cdn-cgi/image/width=1200,quality=70,format=jpeg,fit=contain,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F11c24da45fb9daad920178c3ff5541ed.png",
      },

      {
        id: uniqid(),
        nameOfFood: "Banana Pancakes",
        category: "Cake",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 17,
        newPrice: 13,
        readyTime:15,
        quantity:1,
        img: "https://img2.goodfon.com/wallpaper/nbig/7/42/pancakes-banana-bliny-vypechka.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Fresh Farm Pizza",
        category: "Pizza",
        text: `One of the simplest and most traditional pizzas is the Margherita, which is topped with tomatoes or tomato sauce, mozzarella, and basil.`,
        oldPrice: 26,
        newPrice: 15,
        readyTime:25,
        quantity:1,
        img: "https://c4.wallpaperflare.com/wallpaper/1017/647/742/food-pizza-still-life-hd-wallpaper-preview.jpg",
      },
      {
        id: uniqid(),
        nameOfFood: "Orange Juice",
        category: "Drinks",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 20,
        newPrice: 14,
        quantity:1,
        img: "https://media.glamourmagazine.co.uk/photos/6138a999f5e39d30c69b3fbb/4:3/w_1920,h_1440,c_limit/halloween-cocktails_sq.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Grilled Sandwich",
        category: "Sandwich",
        oldPrice: 15,
        newPrice: 10,
        readyTime:15,
        quantity:1,
        img: "https://img.freepik.com/premium-photo/american-hot-cheese-sandwich-homemade-grilled-cheese-sandwich-breakfast_2829-3521.jpg?w=2000",
      },

      {
        id: uniqid(),
        nameOfFood: "Taco Mexicana",
        category: "Fish",
        oldPrice: 17,
        newPrice: 11,
        readyTime:13,
        quantity:1,
        img: "https://cutewallpaper.org/21/taco-wallpapers/Desktop-Wallpapers-Mexican-tacos-Tomatoes-Fast-food-Food-Plate.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Avacado Sandwich",
        category: "Sandwich",
        oldPrice: 15,
        newPrice: 12,
        readyTime:30,
        quantity:1,
        img: "https://img5.goodfon.com/wallpaper/nbig/7/c2/sendvichi-buterbrod-avokado-pomidor-sous.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Lime and Strawberry Mix",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        category: "Drinks",
        oldPrice: 25,
        newPrice: 17,
        quantity:1,
        img: "https://images7.alphacoders.com/397/397308.jpg",
      },


      {
        id: uniqid(),
        nameOfFood: "Pasta Italiano",
        category: "Soup",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 20,
        newPrice: 14,
        readyTime:30,
        quantity:1,
        img: "https://media.istockphoto.com/photos/pasta-plate-picture-id637214478?b=1&k=20&m=637214478&s=170667a&w=0&h=6cKxdraXf5VErmb7nRw6vSrk_VehwCoTY2f4nNIhIpU=",
      },

      {
        id: uniqid(),
        nameOfFood: "Shrimp Curry",
        category: "Soup",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 25,
        newPrice: 22,
        readyTime:30,
        quantity:1,
        img: "https://images2.alphacoders.com/862/862632.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Black Burger",
        category: "Burger",
        text: ` SAVE UPTO RS 98 !!! American Black Burger`,
        oldPrice: 23,
        newPrice: 19,
        readyTime:30,
        quantity:1,
        img: "https://thumbs.dreamstime.com/b/black-burger-black-background-cheeseburger-recipes-fast-food-black-burger-black-background-cheeseburger-recipes-fast-171114034.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Sugary Donuts",
        category: "Cake",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 15,
        newPrice: 12,
        readyTime:30,
        quantity:1,
        img: "https://imageresizer.static9.net.au/6IRo4HetgIJiRcvj7h9DYr8ORpw=/1000x563/https%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2F2018%2F03%2F13%2F15%2F10%2FProsecco-donut.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Virgin Mojito",
        category: "Drinks",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 24,
        newPrice: 15,
        quantity:1,
        img: "https://miro.medium.com/max/1080/0*AQUUe_zn7ELp8dyE",
      },


      {
        id: uniqid(),
        nameOfFood: "American Cheese Chicken Burger",
        category: "Burger",
        text: `A Warm Burger Bun Stuffed With Grilled Mince Chicken Patty Drooled With Smokey Bbq Sauce, Cheese Slice & Glazy Caramelized Onion, Like This Combination Is Made In Heaven!!`,
        oldPrice: 20,
        newPrice: 12,
        readyTime:30,
        quantity:1,
        img: "https://media.istockphoto.com/photos/crispy-chicken-burger-picture-id539243164?k=20&m=539243164&s=612x612&w=0&h=_F6b3xG4BdTFjXaiE2-Z72qm0dsloQ7bSFLBHKh9iWU=",
      },

      {
        id: uniqid(),
        nameOfFood: "Fluffy American Pancake",
        category: "Cake",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 25,
        newPrice: 17.49,
        readyTime:30,
        quantity:1,
        img: "https://www.delscookingtwist.com/wp-content/uploads/2022/01/Easy-Fluffy-American-Pancakes_7.jpg",
      },


      {
        id: uniqid(),
        nameOfFood: "Three Pepper Pizza",
        category: "Pizza",
        text: `Roman pizza often omits tomatoes (an early 16th-century import) and uses onions and olives. `,
        oldPrice: 30,
        newPrice: 22,
        readyTime:30,
        quantity:1,
        img: "https://i.pinimg.com/736x/e0/20/5e/e0205e13e5802e3af0077615f112d7ff.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Banana Juice",
        category: "Drinks",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 19,
        newPrice: 12,
        quantity:1,
        img: "https://www.tinggly.com/journal/wp-content/uploads/2015/05/shutterstock_89452240.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Ham Sandwich",
        category: "Sandwich",
        oldPrice: 15,
        newPrice: 12,
        readyTime:30,
        quantity:1,
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190322-ham-sandwich-horizontal-1553721016.png",
      },

      {
        id: uniqid(),
        nameOfFood: "Halibut",
        category: "Fish",
        oldPrice: 15,
        newPrice: 12,
        readyTime:30,
        quantity:1,
        img: "https://assets.epicurious.com/photos/599b45c2ae148f4d113214a7/master/w_2000,h_1333,c_limit/grilled-halibut-with-tomatoes-and-hearts-of-palm-recipe-BA-081717.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Latino Chicken",
        category: "Chicken",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 20,
        newPrice: 12,
        readyTime:30,
        quantity:1,
        img: "https://www.thespruceeats.com/thmb/_gYdYk_HIurXAXYepKucxjGc_ok=/1500x844/smart/filters:no_upscale()/GettyImages-666710160-0b77f6cf3f3049e498a0d80bbf6535cc.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Mixied Drink",
        category: "Drinks",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 30,
        newPrice: 13,
        quantity:1,
        img: "https://www.sidechef.com/article/2156cbdf-1cb1-4e46-905f-9b658381f063.jpg?d=1408x1120",
      },

      {
        id: uniqid(),
        nameOfFood: "Butterfly Chicken",
        category: "Chicken",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 25,
        newPrice: 19,
        readyTime:30,
        quantity:1,
        img: "https://static01.nyt.com/images/2016/06/13/dining/13COOKING-BUTTERFLIED-CHICKEN2/13COOKING-BUTTERFLIED-CHICKEN2-articleLarge.jpg",
      },


      {
        id: uniqid(),
        nameOfFood: "Garlick Soup",
        category: "Soup",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 40,
        newPrice: 33,
        readyTime:30,
        quantity:1,
        img: "https://assets.bonappetit.com/photos/6282c1d74c74c6854e166f0a/1:1/w_2560%2Cc_limit/Bloody-Mary-Salmorejo.png",
      },

      {
        id: uniqid(),
        nameOfFood: "Coca-Cola",
        category: "Drinks",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 15,
        newPrice: 10,
        quantity:1,
        img: "https://p4.wallpaperbetter.com/wallpaper/989/646/538/can-red-photography-logo-wallpaper-preview.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Vegetarian Noodle",
        category: "Soup",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 23,
        newPrice: 14,
        readyTime:30,
        quantity:1,
        img: "https://yupitsvegan.com/wp-content/uploads/2018/09/sesame-garlic-noodles-vegan-gluten-free-square.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Chocolate Creamy Cake",
        category: "Cake",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 45,
        newPrice: 30.45,
        readyTime:30,
        quantity:1,
        img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DrEWL7AIN",
      },

      {
        id: uniqid(),
        nameOfFood: "Krunch Chicken Burger",
        category: "Burger",
        text: `Double Treat!! True To The Core, Authentic Grilled Burger With 2 Decks Of Smothered Grilled Chicken Patties Covered With Cheese two Slices, Glazy Caramelized Onions & Original Smokey Legacy Sauce`,
        oldPrice: 35,
        newPrice: 25,
        readyTime:30,
        quantity:1,
        img: "https://trentapizza.co.uk/wp-content/uploads/2016/07/Buffalo-Chicken-Burger.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Fanta",
        category: "Drinks",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 16,
        newPrice: 12,
        quantity:1,
        img: "https://www.drinkworks.co.uk/wp-content/uploads/2015/01/home-fanta-portofolio-4-3.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Bluberry Pancake",
        category: "Cake",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 40,
        newPrice: 27.29,
        readyTime:30,
        quantity:1,
        img: "https://plantifulheart.com/wp-content/uploads/2019/01/Spelt-Pancakes-Blueberry-Mini.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Cheezy Pan Pizza",
        category: "Pizza",
        text: "Signature tomato sauce, Mozzarella cheese, mix of deli meats (beef, lamb), red onion, olives, basil",
        oldPrice: 24,
        newPrice: 19,
        readyTime:30,
        quantity:1,
        img: "https://wallpapers.com/images/high/crispy-thin-cheese-pizza-4bd0m3dqsafur911.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Italian Sandwich",
        category: "Sandwich",
        oldPrice: 15,
        newPrice: 12,
        readyTime:30,
        quantity:1,
        img: "https://cellones.com/wp-content/uploads/2021/02/sandwich.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Talstalop's Fish Meal",
        category: "Fish",
        oldPrice: 15,
        newPrice: 12,
        readyTime:30,
        quantity:1,
        img: "https://www.giggsmeat.com/wp-content/uploads/2020/10/image.jpeg",
      },

      {
        id: uniqid(),
        nameOfFood: "Sprite",
        category: "Drinks",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 13,
        newPrice: 10,
        quantity:1,
        img: "https://wallpaperaccess.com/full/1897197.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Mushroom Soup",
        category: "Soup",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 29,
        newPrice: 18,
        readyTime:30,
        quantity:1,
        img: "https://static.onecms.io/wp-content/uploads/sites/44/2019/11/Mushroom-Sherry-Soup.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Bacon Burger",
        category: "Burger",
        text: `Double Treat!! True To The Core, Authentic Grilled Burger With 2 Decks Of Smothered Grilled Chicken Patties Covered With Cheese two Slices, Glazy Caramelized Onions & Original Smokey Legacy Sauce`,
        oldPrice: 39,
        newPrice: 24,
        readyTime:30,
        quantity:1,
        img: "https://c4.wallpaperflare.com/wallpaper/1/443/701/fast-food-burger-wallpaper-preview.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Chicken Grill",
        category: "Chicken",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 38.58,
        newPrice: 25,
        readyTime:30,
        quantity:1,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqiy3VD-rA8Lucdt-gVD_mSCU2UB1YOPU-yUK81P4bp6kwy0A-dLqg5uf5KT7e8e4Djlg&usqp=CAU",
      },

      {
        id: uniqid(),
        nameOfFood: "7UP",
        category: "Drinks",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 15,
        newPrice: 10,
        quantity:1,
        img: "https://booda.ph/wp-content/uploads/2021/07/7up-2L.png",
      },

      {
        id: uniqid(),
        nameOfFood: "Chocolate Donuts",
        category: "Cake",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 18,
        newPrice: 13,
        readyTime:30,
        quantity:1,
        img: "https://www.biggerbolderbaking.com/wp-content/uploads/2020/11/Homemade-Dunkin-Donuts-WS-Thumb-scaled.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Hot Chili Pizza",
        category: "Pizza",
        text: `Signature white sauce, Mozzarella cheese, chili, smoked sausage, smoked turkey, champignons, red and green bell peppers, tomatoes, olives`,
        oldPrice: 32,
        newPrice: 23,
        readyTime:30,
        quantity:1,
        img: "https://images.krym-eda.ru/JPBh0MYDmQ_N7WZYc9BnD4JJsAI=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/aa829607-2008-472a-808c-054e40417afc/4b1374f40decad3dfbba2a009d4a72f7.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Mufuletta Sandwich",
        category: "Sandwich",
        oldPrice: 15,
        newPrice: 12,
        readyTime:30,
        quantity:1,
        img: "https://www.sanpellegrinofruitbeverages.com/au/sites/g/files/xknfdk906/files/Muffuletta_sandwich_post.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Popeyes Chicken",
        category: "Chicken",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 39,
        newPrice: 22.45,
        readyTime:30,
        quantity:1,
        img: "https://static.onecms.io/wp-content/uploads/sites/19/2019/03/04/popeyeschicken-2000.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Pepsi",
        category: "Drinks",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 19,
        newPrice: 13,
        quantity:1,
        img: "https://wallpaperaccess.com/full/1277470.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Fish Taco",
        category: "Fish",
        oldPrice: 15,
        newPrice: 12,
        readyTime:30,
        quantity:1,
        img: "https://hips.hearstapps.com/hmg-prod/images/190307-fish-tacos-112-1553283299.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Dan Dan Mian",
        category: "Soup",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 35,
        newPrice: 17,
        readyTime:30,
        quantity:1,
        img: "https://i2.wp.com/seonkyounglongest.com/wp-content/uploads/2019/10/Dan-Dan-Noodles-11.jpg?fit=2000%2C1333&ssl=1",
      },

      {
        id: uniqid(),
        nameOfFood: "Choco-Butter Cake",
        category: "Cake",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 20,
        newPrice: 14,
        readyTime:30,
        quantity:1,
        img: "http://cdn.shopify.com/s/files/1/0918/2274/products/chocolate-peanut-butter-cake-chocolate-cake-jaslyn-cakes-eat-cake-today-birthday-cake-delivery-klpjmalaysia-100778_grande.jpg?v=1578914236",
      },

      {
        id: uniqid(),
        nameOfFood: "Indian Chicken",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        category: "Chicken",
        oldPrice: 15,
        newPrice: 12,
        readyTime:30,
        quantity:1,
        img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-swasthi-500x500.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Kit Kat Cake",
        category: "Cake",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat quae quod ducimus sit voluptates eligendi illo. Ullam, nam amet!`,
        oldPrice: 35,
        newPrice: 22  ,
        readyTime:30,
        quantity:1,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvg3sn_cGaW3nr4MuHbWdJtBLpU6gIsEKpvA&usqp=CAU",
      },

      {
        id: uniqid(),
        nameOfFood: "Combo Burger and Free",
        category: "Burger",
        text: `Double Treat!! True To The Core, Authentic Grilled Burger With 2 Decks Of Smothered Grilled Chicken Patties Covered With Cheese two Slices, Glazy Caramelized Onions & Original Smokey Legacy Sauce`,
        oldPrice: 39,
        newPrice: 31,
        readyTime:30,
        quantity:1,
        img: "https://c4.wallpaperflare.com/wallpaper/771/93/160/food-burger-hd-wallpaper-thumb.jpg",
      },

      {
        id: uniqid(),
        nameOfFood: "Combo Pizza",
        category: "Pizza",
        text: `Signature white sauce, Mozzarella cheese, chicken fillet, champignon mushrooms, tomatoes, barbecue sauce`,
        oldPrice: 34,
        newPrice: 25,
        readyTime:30,
        quantity:1,
        img: "https://imageproxy.wolt.com/menu/menu-images/62826d155e0bd023d90ff14b/a5b1c624-d5b3-11ec-96ab-ae7d1773659f_22_pizza_sicilia_7964.jpeg",
      },
    ],
  },

  reducers: {
    foodDisplay: (state) => {
      return state;
    },
  },
});
export const { foodDisplay } = foodsSlice.actions;
export default foodsSlice.reducer;