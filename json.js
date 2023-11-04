const user = { id: 1, name: 'Mehedi Hasan', job: 'Actor' };
const stringify = JSON.stringify(user);
// console.log(stringify)



const shop = {
    owner: 'Mehedi',
    address: {
        street: 'Trunk Road',
        city: 'Feni',
        country: 'BD'
    },
    products: ['laptop', 'monitor', 'PC', 'Mouse'],
    revenue: 10000,
    isOpen: true,
    isNew: 'true'
}

const shopJson = JSON.stringify(shop);
console.log(shopJson)

const shopObj = JSON.parse(shopJson);
console.log(shopObj)