//1 Задание
// const TradeList = [
//     {item: "milk", Quantity: 10, bought: 'sold'},
//     {item: "yoghurt", Quantity: 6, bought: 'onsell'},
//     {item: "choco", Quantity: 8, bought: 'sold'},
// ];

// TradeList.sort((a, b) => {
//     if (a.bought === 'onsell' && b.bought === 'sold') {
//         return -1;
//     }
//     if (a.bought === 'sold' && b.bought === 'onsell') {
//         return 1; 
//     }
//     return 0; 
// });

// console.log(TradeList);


// function addPurchase(tradeList, newItem, quantity) {
    
//     const existingItem = tradeList.find(item => item.item === newItem);

//     if (existingItem) {
        
//         existingItem.Quantity += quantity;
//     } else {
       
//         tradeList.push({ item: newItem, Quantity: quantity, bought: 'onsell' });
//     }
// }

// addPurchase(TradeList, "milk", 5); 
// addPurchase(TradeList, "bread", 2); 

// console.log(TradeList);


// function markAsBought(tradeList, productName) {   
//   const item = tradeList.find(item => item.item === productName);
//     if (item) {
//         item.bought = 'sold';
//     } else {
//         console.log(`${productName} не найден в списке.`);
//     }
// }
// markAsBought(TradeList,'yoghurt')
// console.log(TradeList)


//Задание 2
//  const TradeList = [
//      {item: "milk", Quantity: 10, bought: 33},
//      {item: "yoghurt", Quantity: 6, bought: 21},
//      {item: "choco", Quantity: 8, bought: 15},
//  ];
//  function CheckList(TradeList){
//     console.log("***********Список*********");
//     TradeList.forEach(item =>{
//         console.log(`Продукт: ${item.item}, Количество : ${item.Quantity}, Цена : ${item.bought}`)
//     })
//  }
//  CheckList(TradeList);


//  function Allprice(tradeList) {

//     const totalSum = tradeList.reduce((sum, item) => {
//         return sum + item.bought * item.Quantity;
//     }, 0); 

    
//     console.log(`Общая сумма покупки: ${totalSum}`);}

//     Allprice(TradeList);


//     function MostPrice(tradeList) {
        
//         const mostExpensive = tradeList.reduce((max, item) => {
//             const totalCost = item.bought * item.Quantity;
//             if (totalCost > max.totalCost) {
//                 return { item: item.item, totalCost: totalCost };
//             }
//             return max;
//         }, { item: null, totalCost: 0 }); 
    
       
//         console.log(`Самая дорогая покупка: ${mostExpensive.item}, Общая стоимость: ${mostExpensive.totalCost}`);
//     }
    
    
//     MostPrice(TradeList);

//Задание 3
// Массив стилей
// const styles = [
//     { name: "color", value: "blue" },
//     { name: "font-size", value: "20px" },
//     { name: "text-align", value: "center" },
//     { name: "text-decoration", value: "underline" }
// ];


// function applyStylesAndPrint(styles, text) {
   
//     const styleString = styles.map(style => `${style.name}: ${style.value}`).join('; ');

    
//     const htmlString = `<p style="${styleString}">${text}</p>`;

   
//     document.write(htmlString);
// }

// applyStylesAndPrint(styles, "Hello, styled world!");



///Задание 4

const audit =[
    { name: "Аудитория 101", seats: 15, faculty: "Физический" },
    { name: "Аудитория 102", seats: 18, faculty: "Математический" },
    { name: "Аудитория 103", seats: 20, faculty: "Физический" },
    { name: "Аудитория 104", seats: 10, faculty: "Лингвистический" },
    { name: "Аудитория 105", seats: 12, faculty: "Математический" },
]

const findAud = (audit) =>{
    audit.forEach(item => {
        console.log(`Название аудитории ${item.name}`)
    })
    
}
// findAud(audit)

const findFaq = (faculty) => {
    const filterAud = audit.filter(item => item.faculty === faculty)
    
    filterAud.forEach(aud =>{
        console.log(`Номер Аудитории ${aud.name}`)
}) 
}
// findFaq('Физический')
const group = { name: "Группа А", students: 16, faculty: "Физический" };

const showAuditoriumsForGroup = (audit, group) => {
    const result = audit.filter(aud => aud.faculty === group.faculty && aud.seats >= group.students);
    result.forEach(aud => {
        console.log(`Название: ${aud.name}, Места: ${aud.seats}, Факультет: ${aud.faculty}`);
    });
}

showAuditoriumsForGroup(audit,group)

