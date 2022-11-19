import create from "zustand";
import { combine } from "zustand/middleware";

type EventType = any;

export const useEventStore = create(
	combine(
		{
			eventsMap: [] as EventType[],
		},
		(set) => ({
			// setDivisions: (v: Array<any>) => {
			// 	return set({ divisions: [...v] });
			// },
			addEvent: (v: any) => {
				return set((s) => ({
					eventsMap: [v, ...s.eventsMap],
				}));
			},
			setEventFollowing: (
				event_id: number,
				followers: number,
				isFollowing: boolean
			) => {
				return set((s) => ({
					eventsMap: s.eventsMap.map((e: any) => {
						if (e.id == event_id) {
							e.isFollowing = isFollowing;
							e.followers = followers;
						}
						return e;
					}),
				}));
			},
			setEventMembers: (event_id: number, members_count: number) => {
				return set((s) => ({
					eventsMap: s.eventsMap.map((e: any) => {
						if (e.id == event_id) {
							e.members_count = members_count;
						}
						return e;
					}),
				}));
			},
			// setEvent: (event: EventType) => {
			// 	return set((s) => ({
			// 		eventsMap: {
			// 			...s.eventsMap,
			// 			[event.id]: event,
			// 		},
			// 	}));
			// },
			set,
		})
	)
);
