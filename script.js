
let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

for (let i =0; i<2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50){
            console.log("done");
            appData.expenses[a] = b;
        } else {
            console.log("bad result");
            i--;
        };       
}
appData.moneyPerDay = appData.budget/30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 10000){
    console.log("низкий уровень достатка");
} else if (appData.moneyPerDay > 10000 && appData.moneyPerDay < 50000){
    console.log("средний уровень достатка");
} else if (appData.moneyPerDay > 50000){
    console.log("высокий уровень достатка");
} else{
    console.log("произошла ошибка");
}

   