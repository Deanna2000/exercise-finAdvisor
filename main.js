//Create object that represents a financial advisor and has the following properties and methods:
// Company (enumerable, writable, property)
// Specialty (enumerable, writable, property)
// Name (enumerable, property)
// Portfolio (non-enumerable, property) - Should display the stocks the advisor currently holds
// Worth (non-enumerable, method)
// Purchase (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
// Sell (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments


// Set up the object with the information we'll need to manage our financial information
const financialAdvisor = Object.create({},
{
    company:  //entity for the financial advisor
    {
        value: "Theivery Financial",
        enumerable: true,
        writable: true
    },
    specialty: //skills used by the financial advisor
    {
        value: "Taking Candy from Babies",
        enumerable: true,
        writable: true
    },
    name:    //name of financial advisor
    {
        value: "Evil Nemisis",
        enumerable: true
    },
    portfolio:  //holds all of the information related to the financial advisor's transactions
    {
        value: [],
        enumerable: false
    },
    worth:     //holds current value of the portfolio
    {
        value: function ()
        {
           let totalPortfolioWorth = 0
           this.portfolio.array.forEach(element =>
            {
                if (transaction.purchase)
                {
                    totalPortfolioWorth += transaction.price * transaction.quantity
                }
                else
                {
                    totalPortfolioWorth -= transaction.price * transaction.quantity
                }
            }
        )
            return totalPortfolioWorth
        }
    },
    purchase:
    {
        value: function(symbol, quantity, price)
        {
        let transaction = this.portfolio.push(
            {
                symbol,
                quantity,
                price,
                purchase: true
            }
        )
        }
    },
    sell:
    {
        value: function(symbol, quantity, price)
        {
        let transaction = this.portfolio.push(
            {
                symbol,
                quantity,
                price,
                purchase: false
            }
        )
        }
    },
})





    console.log(Object.values(financialAdvisor))

    financialAdvisor.purchase("GOOGL",400,20.00)
    financialAdvisor.purchase("AAPL", 400, 40.00)
    financialAdvisor.sell("AAPL", 100, 40.00)




// When sell() or purchase() are invoked, then the stock portfolio should be modified accordingly. Start off with making portfolio property an array that holds transactions.

// When you invoke the worth() method, it should look at every transaction and calculate the advisor's net worth.

// Use document.createElement to build & display an HTML component to display the advisor's name, company, and specialty.
// Iterate over the advisor's portfolio and use document.createDocumentFragment along with document.createElement to display some HTML components representing each stock owned by the advisor.