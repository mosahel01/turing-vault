// export const emtpyObj = {};

export {};

declare global {
	interface Window {
		supportAI: {
			version: string;
			enableAutoReply(): void;
		};
	}
}
