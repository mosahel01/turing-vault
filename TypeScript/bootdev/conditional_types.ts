export type SentimentString<T, U extends object> = T extends U
	? "mad" | "furious"
	: "content" | "happy";
