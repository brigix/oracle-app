import cards from "../jsons/lenormand_meanings.json";
import idz from "../jsons/lenormand_deck.json";
import { LenormandCard } from "../models/models";

export const parse = () => {
	const lenormandDeck = [];
	for (const [key, value] of Object.entries(cards)) {
		const card: LenormandCard = {
			key: idz.find((c) => c.title === key)?.id,
			title: key,
			keywords: value.keywords,
			meaning: value.general,
			nouns: value.nouns,
			verbs: value.verbs,
			adjectives: value.adjectives,
			health: value.health,
			career: value.career,
			love: value.love,
			self_development: value["self development"],
			spiritual: value["spiritual meaning"],
		};
		lenormandDeck.push(card);
	}
	return lenormandDeck;
};

export const exportJson = (data: any) => {
	const element = document.createElement("a");
	const textFile = new Blob([JSON.stringify(data)], {
		type: "application/json",
	});
	element.href = URL.createObjectURL(textFile);
	element.download = "lenormand_complete_meanings.json";
	document.body.appendChild(element);
	element.click();
};
