const Category = require('./models/category')
const Product = require('./models/product')

await Category.deleteMany({});
const categories = await Category.create([
{name: 'Best Sellers'},
{name: 'Hoodies'},
{name: 'Sweatshirt'},
]);

await Product.deleteMany({});
const product = await Product.create([
{
  name: 'Rooted In Christ', 
  sizesAvailable: ['S', 'M', 'L', 'XL', '2XL'], 
  size: '',
  colorsAvailable: ['Forest Green', 'Grey'], 
  color: '',
  images: ['https://i.imgur.com/qeD3wwf.jpeg', 'https://i.imgur.com/4i2R2nY.jpeg'],
  description: 'Stand tall, Rooted in Christ',
  categoryId: categories[0], 
  price: 59.99
},{
  name: 'All Things', 
  sizesAvailable: ['S', 'M', 'L', 'XL', '2XL'], 
  size: '',
  colorsAvailable: ['Grey'], 
  color: '',
  images: ['https://i.imgur.com/wmNB8ha.jpg', 'https://i.imgur.com/CrGM0EK.jpg'], 
  description: 'Not by power, not by might but by the strength of the holy', 
  categoryId: categories[2], 
  price: 39.99
},{
  name: 'Healed & Forgiven', 
  sizesAvailable: ['S', 'M', 'L', 'XL', '2XL'], 
  size: '',
  colorsAvailable: ['Tan', 'Black'], 
  color: '',
  images: ['https://i.imgur.com/yjAz8gn.jpeg', 'https://i.imgur.com/iAUr7pF.jpeg'], 
  description: 'Embrace redemption: Healed, Forgiven and Free', 
  categoryId: categories[1], 
  price: 59.99 
},{
  name: 'Matthew 7:7', 
  sizesAvailable: ['S', 'M', 'L', 'XL', '2XL'], 
  size: '',
  colorsAvailable: ['Gold', 'Blue', 'White', 'Black'], 
  color: '',
  images: ['https://i.imgur.com/IscMNwU.jpeg', 'https://i.imgur.com/8mVBxXv.jpeg', 'https://i.imgur.com/IscMNwU.jpeg'], 
  description: 'Keep on asking, and you will receive what you ask for. Keep on seeking, and you will find. Keep on knocking, and the door will be opened to you.', 
  categoryId: categories[1], 
  price: 59.99
},{
  name: 'But First, Pray', 
  sizesAvailable: ['S', 'M', 'L', 'XL', '2XL'], 
  size: '',
  colorsAvailable: ['White', 'Red'], 
  color: '',
  images: ['https://i.imgur.com/9kA0jsB.jpeg', 'https://i.imgur.com/A3ezdAl.jpeg'], 
  description: 'Before any & everything!', 
  categoryId: categories[0],
  price: 59.99
},{
  name: 'Jesus Crest', 
  sizesAvailable: ['S', 'M', 'L', 'XL', '2XL'], 
  size: '',
  colorsAvailable: ['Red', 'Navy'], 
  color: '',
  images: ['https://i.imgur.com/4OLEkWX.jpeg', 'https://i.imgur.com/6MC81zJ.jpeg'], 
  description: 'A powerful reminder of His sacrificial love.', 
  categoryId: categories[0],
  price: 59.99
},{
  name: 'Job 8:7', 
  sizesAvailable: ['S', 'M', 'L', 'XL', '2XL'], 
  size: '',
  colorsAvailable: ['Cardinal Red'], 
  color: '',
  images: ['https://i.imgur.com/lPCqQLV.jpeg', 'https://i.imgur.com/7d6ItVj.jpeg'], 
  description: '', 
  categoryId: categories[2], 
  price: 39.99
},
]);

console.log(items)

process.exit();