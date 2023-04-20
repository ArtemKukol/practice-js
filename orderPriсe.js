let country = 'Белорусь'; // enter country for delivery - Russia, China, USA, any other country
let orderPriсe = 10000; //enter order value, deliveru cost to free -  Russia = 5000, China = 10000, USA = 100 

if (country === 'Russia') {
   if (orderPriсe >= 5000) {
      console.log('Доставка бесплатная');
   } else {
      console.log('Стоимость доставки: 500 рублей');
   }
} else if (country === 'China') {
   if (orderPriсe >= 10000) {
      console.log('Доставка бесплатная');
   } else {
      console.log('Стоимость доставки: 1 000 юаней');
   }
} else if (country === 'USA') {
   if (orderPriсe >= 100) {
      console.log('Доставка бесплатная');
   } else {
      console.log('Стоимость доставки: 10 долларов');
   }
} else {
   console.log('Стоимость доставки: 200 евро');
}