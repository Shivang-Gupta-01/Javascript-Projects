const companies =[

   {name :"company One", category:"Finance" ,start:1981 , end:2003},
   {name :"company Two", category:"Retail" ,start:1992 , end:2008},
   {name :"company Three", category:"Auto" ,start:1999 , end:2007},
   {name :"company Four", category:"Retail" ,start:1989 , end:2010},
   {name :"company Five", category:"Teachnology" ,start:2009 , end:2014},
   {name :"company Six", category:"Finance" ,start:1987 , end:20010},
   {name :"company Seven", category:"Auto" ,start:1986, end:1996},
   {name :"company Eight", category:"Technology" ,start:2011 , end:2016},
   {name :"company Nine", category:"Retail" ,start:1981, end:1989},
];

const age  = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

// forEach
 companies.forEach(companies => console.log(companies.name));

// filter

let candrink = age.filter(age=> age>21);
console.log(candrink);

let retailcompany = companies.filter(company => company.category==="Retail");
console.log(retailcompany);

// get 80's companies

const companyof80 = companies.filter(company => (company.start<1990 && company.start >=1980));
console.log(companyof80);

// 10 years od afe

const companiesolderthan10 = companies.filter(company => ((company.end - company.start) >=10))
console.log(companiesolderthan10);


//map
// create array of company names
const companynames = companies.map(company => ` ${company.name} [${company.start} - ${company.end}]`);
console.log(companynames);

const agessqaure = age.map(age => Math.sqrt(age));
console.log(agessqaure);

const agetimes2 = age.map(age=> age*2);
console.log(agetimes2);

// using two maps side by side

const map2sqrttwice = age.map(age => Math.sqrt(age))
                          .map(age=> age*2);
 console.log(map2sqrttwice);


 // sort companies by start year
 const sortedcompanies  =companies.sort(function(c1,c2)
 {
    if(c1.start>c2.start)
    {
       return 1;
    }
    else{
       return -1;
    }
 });
 console.log(sortedcompanies);

 const sorted = companies.sort((a,b)=>(a.start>b.start) ? 1:-1);
 console.log(sorted);

 // sort ages by ages

 const sortages = age.sort((a,b)=>a-b);
 console.log(sortages);

 // reduces array to a single value
 let agesum  = age.reduce(function(total,age)
 {
    return total+age;
 }, 0);

 console.log(agesum);

 // get total years for all companies

 const totalYears = companies.reduce(function(total,company)
 {
    return total + (company.end-company.start);
 },0);

 console.log(totalYears);

 // combine menthods

 const combined = age
                  .map(age=> age*2)
                  .filter(age=>age>=40)
                  .sort((a,b)=>a-b)
                  .reduce((a,b)=>a+b,0);

console.log(combined);