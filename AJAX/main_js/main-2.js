console.log("We are doing promises");
// promises

function func1()
{
    return new Promise(function(resolve,reject)
    {
        setTimeout(() => {
            
            const error = true; // ususally if the response code is 200 or not
            if(!error)
            {
                console.log('Function:Your Promise has been resolved');
                resolve();
            }
            else
            {
                console.log('Function:Your promise has been rejected');
                reject('Function:Sorry not fulfilled');
            }
        }, 2000);
    })
}

func1().then(function()
{
    console.log("Shivang: Thanks for resolviong");
}).catch(function(error)
{
    console.log("Shivang:Very Bad Bro" + "\n" + error);
})