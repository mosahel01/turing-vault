export function createTicket(
	prevTicket: number,
	comment: string,
): [number, string, boolean] {
	prevTicket++;
	if (comment.toLowerCase().includes("critical")) return [prevTicket, comment, true]
	return [prevTicket, comment, false]
}



// return a Tuple : return [number, string, boolean]
// increment prevTicket : prevTicket++
// return a Boolean True in Tuple: return [number, string, true]


// II example
type UserWithAddress = [
	string,
	{
		city: string;
		country: string
	}
];

const userData: UserWithAddress = [
	"Aragorn",
	{
		city: "Minas Tirith",
	    country: "Gondor"
	},
];

const [userName, { city, country }] = userData;
console.log(city);
// ?
