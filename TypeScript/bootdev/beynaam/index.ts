import { log, chats } from "./chats.js";

const button = document.getElementById("enable-button")!;

button.addEventListener("click", () => {
	// @ts-ignore
    // TODO: ignores any typed errors
	window.supportAI.enableAutoReply();
});

log(chats);
