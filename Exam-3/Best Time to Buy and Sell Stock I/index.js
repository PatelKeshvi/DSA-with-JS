const maximumProfit = (prices) => {
    let minimumPrice = prices[0];
    let maximumProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minimumPrice) {
            minimumPrice = prices[i];
        } else {
            let profit = prices[i] - minPrice;
            if (profit > maximumProfit) {
                maximumProfit = profit;
            }
        }
    }
    return maximumProfit;
}

console.log(maximumProfit([7, 1, 5, 3, 6, 4]));
console.log(maximumProfit([7, 6, 4, 3, 1]));