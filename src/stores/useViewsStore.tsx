import create from "zustand";
import { combine } from "zustand/middleware";
import { wsend } from "../createSocket";
import { API } from "./../app/API";

const viewStoreTokenKey = "vvstr2";
localStorage.removeItem("vvstr");
const getDefaultValues = () => {
    try {
        const t = localStorage.getItem(viewStoreTokenKey) || "";
        if (t) {
            const v = JSON.parse(t) as {
				viewedClubs: Array<number>;
				viewedEvents: Array<number>;
				viewedHelpPosts: Array<number>;
				viewedPosts: Array<number>;
			};
            if (v) {
                return v;
            }
        }
        return {
            viewedClubs: [] as Array<number>,
            viewedEvents: [] as Array<number>,
            viewedHelpPosts: [] as Array<number>,
            viewedPosts: [] as Array<number>,
        };
    } catch {
        return {
            viewedClubs: [] as Array<number>,
            viewedEvents: [] as Array<number>,
            viewedHelpPosts: [] as Array<number>,
            viewedPosts: [] as Array<number>,
        };
    }
};

export const useViewsStore = create(
    combine(getDefaultValues(), (set) => ({
        addHelpingPostView: async (help_post_id: number) => {
            return set((state) => {
                const bb = state;
                if (!state.viewedHelpPosts.includes(help_post_id)) {
                    bb.viewedHelpPosts = [...state.viewedHelpPosts, help_post_id];
                    wsend({
                        op: API.HELPING.addOneView,
                        d: {
                            postId: help_post_id,
                        },
                    });
                }
                localStorage.setItem(viewStoreTokenKey, JSON.stringify(bb));
                return bb;
            });
        },
        addPostView: async (post_id: number) => {
            return set((state) => {
                const bb = state;
                if (!state.viewedPosts.includes(post_id)) {
                    bb.viewedPosts = [...state.viewedPosts, post_id];
                    wsend({
                        op: API.POSTS.addOneView,
                        d: {
                            postId: post_id,
                        },
                    });
                }
                localStorage.setItem(viewStoreTokenKey, JSON.stringify(bb));
                return bb;
            });
        },
        addClubView: async (club_id: number) => {
            return set((state) => {
                const bb = state;
                if (!state.viewedClubs.includes(club_id)) {
                    bb.viewedClubs = [...state.viewedClubs, club_id];
                    wsend({
                        op: API.FEATURES.addClubViews,
                        d: {
                            org_id: club_id,
                        },
                    });
                }
                localStorage.setItem(viewStoreTokenKey, JSON.stringify(bb));
                return bb;
            });
        },
        addEventView: async (event_id: number) => {
            return set((state) => {
                const bb = state;
                if (!state.viewedEvents.includes(event_id)) {
                    bb.viewedEvents = [...state.viewedEvents, event_id];
                    wsend({
                        op: API.FEATURES.addEventViews,
                        d: {
                            event_id: event_id,
                        },
                    });
                }
                localStorage.setItem(viewStoreTokenKey, JSON.stringify(bb));
                return bb;
            });
        },
    }))
);
