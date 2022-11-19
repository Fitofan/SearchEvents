import create from "zustand";
import { combine } from "zustand/middleware";
const sportsTokenKey = "_ft_spord2ts3_storesss";

const getDefaultValues = () => {
	try {
		const t = localStorage.getItem(sportsTokenKey) || "";
		if (t) {
			const b = JSON.parse(t) as any;
			const sp_as = {} as any;
			b.map((v: any) => {
				sp_as["" + v.id] = v;
				return [];
			});
			return { sports: sp_as };
		}
		return {
			sports: {} as Record<string, any>,
		};
	} catch {
		return {
			sports: {} as Record<string, any>,
		};
	}
};

export const useSportsStore = create(
	combine(getDefaultValues(), (set) => ({
		// setSports: (sports_add: any) => {
		// 	return set((s) => {
		// 		localStorage.setItem(
		// 			sportsTokenKey,
		// 			JSON.stringify({
		// 				...s.sports,
		// 			})
		// 		);
		// 		return { sports: sports_add };
		// 	});
		// },
		addSport: (sport_item: any) => {
			return set((state) => {
				const bb = {
					...state.sports,
					["" + sport_item.id]: sport_item,
				};
				localStorage.setItem(sportsTokenKey, JSON.stringify(Object.values(bb)));

				return {
					sports: bb,
				};
			});
		},
	}))
);
