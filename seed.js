const Category = require('./models/category')
const Product = require('./models/product')

await Category.deleteMany({});
const categories = await Category.create([
{name: 'Best Sellers'},
{name: 'Hoodies'},
{name: 'Sweatshirt'},
{name: "Custom Order's"},
]);

await Product.deleteMany({});
const product = await Product.create([
{
  name: 'Rooted In Christ', 
  sizesAvailable: ['S', 'M', 'L', 'XL', '2XL'], 
  size: '',
  colorsAvailable: '', 
  color: '',
  images: [],
  description: 'Stand tall, Rooted in Christ',
  categoryId: categories[1], 
  price: 59.99
},{
  name: 'All Things', 
  sizesAvailable: ['S', 'M', 'L', 'XL', '2XL'], 
  size: '',
  colorsAvailable: '', 
  color: '',
  images: [], 
  description: '', 
  categoryId: categories[2], 
  price: 39.99
},{
  name: 'Healed & Forgiven', 
  sizesAvailable: ['S', 'M', 'L', 'XL', '2XL'], 
  size: '',
  colorsAvailable: '', 
  color: '',
  images: [], 
  description: 'Embrace redemption: Healed, Forgiven and Free', 
  categoryId: categories[1], 
  price: 59.99 
},{
  name: 'Matthew 7:7', 
  sizesAvailable: ['S', 'M', 'L', 'XL', '2XL'], 
  size: '',
  colorsAvailable: '', 
  color: '',
  images: [], 
  description: 'Keep on asking, and you will receive what you ask for. Keep on seeking, and you will find. Keep on knocking, and the door will be opened to you.', 
  categoryId: categories[1], 
  price: 59.99
},{
  name: 'Agape', 
  sizesAvailable: ['S', 'M', 'L', 'XL', '2XL'], 
  size: '',
  colorsAvailable: '', 
  color: '',
  images: [], 
  description: 'Agape love: representing selfless, unconditional compassion and grace towards others.', 
  categoryId: categories[1], 
  price: 59.99
},{
  name: 'But First, Pray', 
  sizesAvailable: ['S', 'M', 'L', 'XL', '2XL'], 
  size: '',
  colorsAvailable: '', 
  color: '',
  images: [], 
  description: 'Before any & everything!', 
  categoryId: categories[0],
  price: 59.99
},{
  name: 'Jesus Crest', 
  sizesAvailable: ['S', 'M', 'L', 'XL', '2XL'], 
  size: '',
  colorsAvailable: '', 
  color: '',
  images: [], 
  description: 'A powerful reminder of His sacrificial love.', 
  categoryId: categories[0],
  price: 59.99
},{
  name: 'Come Too Far', 
  sizesAvailable: ['S', 'M', 'L', 'XL', '2XL'], 
  size: '',
  colorsAvailable: '', 
  color: '',
  images: [], 
  description: "God didn't bring you this far to leave you - Phillippians 1:6", 
  categoryId: categories[2], 
  price: 39.99
},{
  name: 'Job 8:7', 
  sizesAvailable: ['S', 'M', 'L', 'XL', '2XL'], 
  size: '',
  colorsAvailable: '', 
  color: '',
  images: [], 
  description: '', 
  categoryId: categories[2], 
  price: 39.99
}
]);

console.log(items)

process.exit();