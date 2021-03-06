//1.) Display Items with position
console.log(`Question 1`)
let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

let o = ["th","st","nd","rd"]


for (let i = 0; i < color.length; i++) {
	if(i < 3) {
		console.log(`${i+1}${o[i+1]} choice is ${color[i]}`)
	} else {
		console.log(`${i+1}${o[0]} choice is ${color[i]}`)
	}
}
/**************************************************************************
 JOIN ELEMENTS
 */
 console.log(`question 2`)
 let myColor = ["Red", "Green", "White", "Black"];
 console.log(myColor.join());
 console.log(myColor.join('+'));

/**************************************************************************
 RETURN ARRAYS
 */
employees = [
    {
        id: 1,
        first_name: 'Nestor',
        email: 'nede0@va.gov',
        gender: 'Male',
        age: 35,
        ip_address: '80.95.217.202',
        Car: 'Chevrolet',
        Country: 'Russia',
        Company: 'Ozu',
        Job: 'Research Associate',
        Language: 'Kannada',
        phone: '369-416-1791',
        active: true,
        salary: 350000
    },
    {
        id: 2,
        first_name: 'Boony',
        email: 'bconsidine1@dailymail.co.uk',
        gender: 'Male',
        age: 30,
        ip_address: '158.108.174.143',
        Car: 'Kia',
        Country: 'Indonesia',
        Company: 'Flashspan',
        Job: 'Engineer IV',
        Language: 'Bosnian',
        phone: '878-260-8542',
        active: true,
        salary: 150000
    },
    {
        id: 3,
        first_name: 'Humfrid',
        email: 'hmacaree2@craigslist.org',
        gender: 'Male',
        ip_address: '13.121.145.193',
        age: 25,
        Car: 'Dodge',
        Country: 'China',
        Company: 'Mita',
        Job: 'Web Designer',
        Language: 'Bosnian',
        phone: '721-765-6270',
        active: true,
        salary: 550000
    },
    {
        id: 4,
        first_name: 'Hirsch',
        email: 'halbury3@themeforest.net',
        gender: 'Male',
        age: 21,
        ip_address: '154.153.161.16',
        Car: 'Dodge',
        Country: 'Russia',
        Company: 'Kaymbo',
        Job: 'Software Consultant',
        Language: 'Northern Sotho',
        phone: '515-581-1165',
        active: true,
        salary: 250000.08
    },
    {
        id: 5,
        first_name: 'Granny',
        email: 'gmcsharry4@buzzfeed.com',
        gender: 'Male',
        age: 23,
        ip_address: '171.48.242.209',
        Car: 'Ford',
        Country: 'China',
        Company: 'Youtags',
        Job: 'Senior Quality Engineer',
        Language: 'Swedish',
        phone: '757-973-8706',
        salary: 300000.05,
        active: true
    },
    {
        id: 6,
        first_name: 'Bob',
        email: 'bbortolomei5@stanford.edu',
        gender: 'Male',
        age: 19,
        ip_address: '138.88.133.136',
        Car: 'Honda',
        Country: 'Poland',
        Company: 'Vipe',
        Job: 'Web Designer',
        Language: 'Aymara',
        phone: '227-946-1788',
        active: true,
        salary: 100000
    },
    {
        id: 7,
        first_name: 'Chen',
        email: 'cyurshev6@wikipedia.org',
        gender: 'Male',
        age: 20,
        ip_address: '76.98.240.178',
        Car: 'Audi',
        Country: 'Thailand',
        Company: 'Midel',
        Job: 'Web Designer',
        Language: 'Malagasy',
        phone: '361-127-0004',
        active: false,
        salary: 300000
    },
    {
        id: 8,
        first_name: 'Jacquetta',
        email: 'jtretwell7@macromedia.com',
        gender: 'Female',
        age: 28,
        ip_address: '125.157.172.237',
        Car: 'Ford',
        Country: 'Russia',
        Company: 'Devpoint',
        Job: 'Web Developer',
        Language: 'Papiamento',
        phone: '542-329-7755',
        active: false,
        salary: 130000
    },
    {
        id: 9,
        first_name: 'Marget',
        email: 'msooley8@nba.com',
        gender: 'Female',
        age: 30,
        ip_address: '231.239.40.29',
        Car: 'Pontiac',
        Country: 'Nigeria',
        Company: 'Photobean',
        Job: 'Web Developer',
        Language: 'Hebrew',
        phone: '502-799-5098',
        active: false,
        salary: 750000.5
    },
    {
        id: 10,
        first_name: 'Tomkin',
        email: 'tkohtler9@howstuffworks.com',
        gender: 'Male',
        age: 17,
        ip_address: '121.234.135.93',
        Car: 'Pontiac',
        Country: 'Nigeria',
        Company: 'Jaxbean',
        Job: 'Database Administrator',
        Language: 'Filipino',
        phone: '692-372-4141',
        active: false,
        salary: 50000
    }
]
console.log(`question 3`)

// SET ARRAY HOLDERS
let webDevelopers = [];
let nigerianWebDevelopers = [];
let underTwenty = [];
let activeStaff = [];
let pay = [];
let highestPaid = [];
for(let i = 0; i < employees.length; i++){
	
	if(employees[i].Job === 'Web Developer') {
		webDevelopers.push(employees[i].first_name);
	}

}
console.log(`list of Web Developers:${webDevelopers}`);

/*************************************************************************
 NIGERIAN DEVELOPERS
 */
for(let i = 0; i < employees.length; i++){
	
	if((employees[i].Job === 'Web Developer') && (employees[i].Country === 'Nigeria')) {
		nigerianWebDevelopers.push(employees[i].first_name);
	}

}

console.log(`list of Web Nigerian Developers:${nigerianWebDevelopers}`);

/*************************************************************************
 Under 20 years
 */
for(let i = 0; i < employees.length; i++){
	
	if(employees[i].age < 20) {
		underTwenty.push(employees[i].first_name);
	}
}

console.log(`Employees below 20 Years: ${underTwenty}`);

/*************************************************************************
 ACTIVE EMPLOYEES
 */
for(let i = 0; i < employees.length; i++){
	
	if(employees[i].active) {
		activeStaff.push(employees[i].first_name);
	}
}

console.log(`Active Employees: ${activeStaff}`);

/*************************************************************************
 Highest Paid
 */
 for(let i = 0; i < employees.length; i++){
		pay.push(employees[i].salary);
		
}

console.log(pay);
let highestPay = Math.max.apply(null, pay);
for(let i = 0; i < pay.length; i++){
	
// 	if(pay[i] < pay[i+1]){
// 			pay = pay.splice(i, 1)
// 		} else {
// 			pay = pay.splice(i+1, 1)
// 		}
// console.log(pay);
 		if(employees[i].salary === highestPay) {
 		highestPaid.push(employees[i].first_name);
 	}
 }
console.log(`The highest paid employee is ${highestPaid}`);
