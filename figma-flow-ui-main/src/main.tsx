import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import handFlameIcon from "./assets/hand-flame-icon.png";

// replace or add favicon dynamically so we can use the asset from src/
try {
	const head = document.getElementsByTagName("head")[0];
	let link: HTMLLinkElement | null = head.querySelector("link[rel~='icon']");
	if (!link) {
		link = document.createElement("link");
		link.rel = "icon";
		head.appendChild(link);
	}
	link.href = handFlameIcon;
} catch (e) {
	// ignore in non-browser environments
}

createRoot(document.getElementById("root")!).render(<App />);
