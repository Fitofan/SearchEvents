const ENDPOINT = process.env["REACT_APP_POST_SERVER"] as string;

export const POST_API = {
	AUTH: {
		registration: ENDPOINT + "/api/auth/registration",
	},
	USER: {
		updateAvatar: `${ENDPOINT}/api/user/update_avatar`,
		uploadAvatar: `${ENDPOINT}/api/user/upload_avatar`,
		addFamilyMember: `${ENDPOINT}/api/user/add_family_member`,
	},
	CLUB: {
		addClub: ENDPOINT + "/api/v1/org/add_one_club",
		updateBackgroundImage: `${ENDPOINT}/api/v1/org/update_background_image`,
		updateClubLogo: `${ENDPOINT}/api/v1/org/update_logo`,
		addClubDocument: `${ENDPOINT}/api/v1/org/add_document_file`,
		uploadShopMediaFile: `${ENDPOINT}/api/v1/org/upload_shop_media_file`,
		uploadShopProductEditorImage: `${ENDPOINT}/api/v1/org/upload_shop_product_editor_image`,
	},
	CONVERTER: {
		HEICTOJPG: `${ENDPOINT}/api/v1/converter/heictojpeg`,
	},
	EVENT: {
		addEvent: ENDPOINT + "/api/v1/event/add_one_event",
		updateEventLogo: `${ENDPOINT}/api/v1/event/update_logo`,
		updateBackgroundImage: `${ENDPOINT}/api/v1/event/update_background_image`,
		addEventDocument: `${ENDPOINT}/api/v1/event/add_document_file`,
		updateBadgeImage: `${ENDPOINT}/api/v1/event/update_badge_image`,
	},
	POSTS: {
		uploadPostMediaFile: `${ENDPOINT}/api/v1/posts/upload_media_file`,
		publishPost: `${ENDPOINT}/api/v1/posts/publish_post`,
		savePost: `${ENDPOINT}/api/v1/posts/save_post`,
	},
	FEATURES: {
		getMyAddress: `${ENDPOINT}/api/v1/get_my_ip`,
		uploadSignature: `${ENDPOINT}/api/v1/signature/add`,
	},
};

export const API = {
	HELPING: {
		addToBookmark: "helping.add_to_bookmarks",
		loadGetHelpItems: "helping.load_get_help_items",
		loadGiveHelpItems: "helping.load_give_help_items",
		addGetHelpItem: "helping.add_get_help_item",
		saveGetHelpItem: "helping.save_get_help_item",
		addOneView: "helping.add_one_view",
	},
	POSTS: {
		// publishPost: "posts.publish_post",
		getPost: "posts.get_post",
		// savePost: "posts.save_post",
		deleteComment: "posts.delete_comment",
		deletePost: "posts.delete_post",
		likePost: "posts.like_post",
		addComment: "posts.add_comment",
		updateComment: "posts.update_comment",
		addOneView: "posts.add_one_view",
	},
	EVENT: {
		getSettingsLiveChannel: "event.getSettingsLiveChannel",
		createLiveChannel: "event.createLiveChannel",
		saveLiveChannel: "event.saveLiveChannel",
		getRegistrationPayments: "event.get_registration_payments",
		getLivePayments: "event.get_live_payments",
		updateLivePaymentsPaidout: "event.update_live_payments_paidout",
		updateRegistrationPaymentsPaidout:
			"event.update_registration_payments_paidout",
		answerRegistrationRequest: "event.answer_registration_request",
		notifyStartBroadcast: "event.notify_start_broadcast",

		// gym event competition
		getCompetitionSettingsTime: "event.getCompetitionSettingsTime",
		saveCompetitionSettingsTime: "event.saveCompetitionSettingsTime",
		saveCompetitionSettingsDraws: "event.saveCompetitionSettingsDraws",

		getCompetitionSettingsAthletesDraws:
			"event.getCompetitionSettingsAthletesDraws",

		getCompetitionCategories: "event.getCompetitionCategories",
		addCompetitionCategory: "event.addCompetitionCategory",
		saveCompetitionCategory: "event.saveCompetitionCategory",
		deleteCompetitionCategory: "event.deleteCompetitionCategory",
		addCompetitionSubcategory: "event.addCompetitionSubcategory",
		saveCompetitionSubcategory: "event.saveCompetitionSubcategory",
		deleteCompetitionSubcategory: "event.deleteCompetitionSubcategory",

		getHomeCategories: "event.getHomeCategories",

		// event competition registration
		getCompetitionRegistrationAddTeamData:
			"event.getCompetitionRegistrationAddTeamData",
		getCompetitionRegistrationTeamsAthletes:
			"event.getCompetitionRegistrationTeamsAthletes",
		getCompetitionRegistrationAthletes:
			"event.getCompetitionRegistrationAthletes",
		getCompetitionRegistrationAthlete:
			"event.getCompetitionRegistrationAthlete",
		getCompetitionRegistrationTeams: "event.getCompetitionRegistrationTeams",
		getCompetitionRegistrationTeam: "event.getCompetitionRegistrationTeam",

		competitionRegisterAthlete: "event.competitionRegisterAthlete",
		competitionAddTeam: "event.competitionAddTeam",
		competitionRegisterTeam: "event.competitionRegisterTeam",
		// end gym

		payForLiveStripe: "event.pay_for_live_stripe",
		deleteCustomResult: "event.delete_custom_result",
		updateCustomResult: "event.update_custom_result",
		addCustomResult: "event.add_custom_result",
		getCustomResultTV: "event.get_custom_result_tv",
		getWeightProtocolPrint: "event.get_weight_protocol_print",
		getPrintResultByOrgs: "event.get_print_result_orgs",
		getPrintResultByCoaches: "event.get_print_result_coaches",
		getResultsDocument: "event.get_results_document",
		saveResultsDocument: "event.save_results_document",
		getSettings: "event.get_settings",
		getSettingsLiveInfo: "event.get_settings_live_info",
		updateSettingsLiveInfo: "event.update_settings_live_info",
		getLiveScoreSettings: "event.get_live_score_settings",
		updatePairScores: "event.update_pair_scores",
		getReferees: "event.get_referees",
		getSettingsMembers: "event.get_settings_members",
		getOneMemberInfo: "event.get_one_member_info",
		saveOneMemberInfo: "event.save_one_member_info",
		saveSimpleMemberInfo: "event.save_simple_member_info",
		updateReferee: "event.update_referee",
		kickReferee: "event.kick_referee",
		saveGeneralSettings: "event.save_general_settings",
		saveDescription: "event.save_description",
		updateRegistration: "event.update_registration",
		getRegistrationSettings: "event.get_registration_settings",
		updatePermissions: "event.update_permissions",
		updateAddress: "event.update_address",
		addDivision: "event.add_division",
		addCategory: "event.add_category",
		updateCategoriesSorting: "event.update_categories_sorting",
		saveCategory: "event.save_category",
		deleteCategory: "event.delete_category",
		addAgeGroup: "event.add_age_group",
		saveAgeGroup: "event.save_age_group",
		saveDivision: "event.save_division",
		getSettingsGroupCategories: "event.get_settings_groups_categories",
		saveColumns: "event.save_columns",
		getSettingsDivisions: "event.get_settings_divisions",
		addColumn: "event.add_column",
		deleteColumn: "event.delete_column",
		deleteDivision: "event.delete_division",
		deleteGroup: "event.delete_group",

		//-forms
		addForm: "event.add_form",
		getForm: "event.get_form",
		copyForm: "event.copy_form",
		saveForm: "event.save_form",
		getCompletedForms: "event.get_completed_forms",
		getCompletedForm: "event.get_completed_form",
		getFormsSettings: "event.get_forms_settings",

		// team app
		saveTeamApplicationSettings: "event.save_team_application",
		// addTeamAppColumn: "event.add_team_app_column",
		saveTeamAppColumns: "event.save_team_app_columns",
		saveTeamAppFooters: "event.save_team_app_footers",
		getTeamApplication: "event.get_team_application",
		// badges
		getSettingsBadges: "event.get_settings_badges",
		saveBadgeColumns: "event.save_badge_columns",
		// live links
		getSettingsLiveLinks: "event.get_settings_live_links",
		saveLiveLinks: "event.save_settings_live_links",
		getLiveLinks: "event.get_live_links",
		deleteEventMember: "event.delete_event_member",
		getDocuments: "event.get_documents",
		addDocument: "event.add_document",
		getDocument: "event.get_document",
		saveDocument: "event.save_document",
		deleteDocument: "event.delete_document",
		// ACTIONS
		follow: "event.follow",
		unfollow: "event.unfollow",

		// REGISTRATION
		getRegistrationInfo: "event.registration.get_info",
		getClubMembersRegistration: "event.registration.get_club_members",
		getRegisterMemberInfo: "event.registration.get_member_info",
		registrationGetSimpleMemberInfo:
			"event.registration.get_simple_member_info",
		registrationGetSimpleRoomMemberInfo:
			"event.registration.get_simple_room_member_info",
		getNewRegisterMemberInfo: "event.registration.get_new_member_info",
		leaveEventByUser: "event.registration.leave_event",
		registerUser: "event.registration.register_user",

		// auth registration
		simpleFreeRegistration: "event.registration.simple_free_registration",
		simpleRoomFreeRegistration:
			"event.registration.simple_room_free_registration",
		simpleRegistrationPayStripe: "event.registration.pay_with_stripe",
		simpleRoomRegistrationPayStripe: "event.registration.pay_room_with_stripe",
		// not auth registration

		registerFakeUser: "event.registration.register_fake_user",
		getRefereeRegisterInfo: "event.registration.get_referee_register_info",
		sendRefereeRequest: "event.registration.send_referee_request",
		cancelRefereeRequest: "event.registration.cancel_referee_request",

		// pages
		getHomeDivisions: "event.get_home_divisions",
		getHomeParticipants: "event.get_home_participants",
		getHomeResults: "event.get_home_results",
		getHomeTeams: "event.get_home_teams",
		getResultsData: "event.get_results_data",
		getDivisionTeams: "event.get_division_teams",
		getCategoryCompetitors: "event.get_category_competitors",
		getDivisionTeamCompetitors: "event.get_division_team_competitors",
		getDivisionTeamPrint: "event.get_division_team_print",
		getDivisionBadgePrint: "event.get_division_badge_print",
		getRoomMembers: "event.get_room_members",

		//draws
		getCategoryDraws: "event.get_category_draws",
		resortCategoryPairs: "event.resort_category_pairs",
		swapDrawsCompetitors: "event.swap_draws_competitors",
		deleteEvent: "event.delete_event",
		getNumbering: "event.get_numbering",
		renumberDayCourt: "event.renumber_day_court",

		// rooms
		addRoom: "event.add_room",
		saveRoom: "event.save_room",
		deleteRoom: "event.delete_room",
		getSettingsRooms: "event.get_settings_rooms",
		updateRoomsRegistration: "event.update_rooms_settings",

		// payment methods
		getPaymentMethods: "event.getPaymentMethods",
		addPaymentMethod: "event.addPaymentMethod",
		deletePaymentMethod: "event.deletePaymentMethod",
	},
	SHOP: {
		addToCart: "shop.add_to_cart",
		updateCartItem: "shop.update_cart_item",
		getShoppingCart: "shop.get_shopping_cart",
		deleteFromCart: "shop.delete_from_cart",
		getCheckout: "shop.get_checkout",
		placeOrder: "shop.place_order",
	},
	CLUB: {
		// get
		getByLink: "org.get_by_link",
		placeSportSuitRequest: "org.placeSportSuitRequest",
		getClubShopOrders: "org.getClubShopOrders",

		getFormsSettings: "org.get_forms_settings",
		addForm: "org.add_form",
		copyForm: "org.copy_form",
		getForm: "org.get_form",
		saveForm: "org.save_form",
		getCompletedForms: "org.get_completed_forms",
		getCompletedPackagesForms: "org.get_completed_packages_forms",
		getCompletedForm: "org.get_completed_form",
		getPackageMembers: "org.get_package_members",
		getPackageUserPayments: "org.get_package_user_payments",

		getShop: "org.get_shop",
		getSettings: "org.get_settings",
		getMembers: "org.get_club_members",
		getSettingsMembers: "org.get_settings_members",
		getBranches: "org.get_branches",
		getMemberOf: "org.get_memberof",
		getSports: "org.get_sports",

		getSchedule: "org.get_schedule",
		getVisits: "org.get_groups_visits",
		getGroupMarks: "org.get_groups_marks",
		getMembersByType: "org.get_members_by_type",
		getMyMembershipInfo: "org.get_my_membership_info",
		getOnePackage: "org.get_one_package",
		getOnePackageSettings: "org.get_one_package_settings",
		getPackagePayments: "org.get_package_payments",
		getPackages: "org.get_packages",
		resortPackages: "org.resort_packages",
		getMembershipPayments: "org.get_membership_payments",

		// payment methods
		getPaymentMethods: "org.getPaymentMethods",
		addPaymentMethod: "org.addPaymentMethod",
		deletePaymentMethod: "org.deletePaymentMethod",

		// delete
		deleteSport: "org.delete_sport",
		// add
		addScheduleGroup: "org.add_schedule_group",
		addSport: "org.add_sport",
		addShopProduct: "org.add_shop_product",
		saveShopProduct: "org.save_shop_product",
		getShopAdminProducts: "org.get_shop_admin_products",
		getShopAdminOrders: "org.get_shop_admin_orders",
		getShopAdminOrder: "org.get_shop_admin_order",
		saveShopOrder: "org.save_shop_order",
		getShopProductSettings: "org.get_shop_product_setting",
		getShopProduct: "org.get_shop_product",

		// documents
		getDocuments: "org.get_documents",
		addDocument: "org.add_document",
		getDocument: "org.get_document",
		saveDocument: "org.save_document",
		deleteDocument: "org.deleteDocument",

		//events calendar
		getEventsCalendar: "org.get_events_calendar",
		getCalendarEventsSettings: "org.get_evens_calendar_settings",
		addEventToCalendar: "org.add_event_to_calendar",
		deleteFromEventCalendar: "org.delete_event_from_calendar",
		editEventCalendar: "org.edit_event_calendar",

		// trial lesson
		getTrialLesson: "org.get_trial_lesson",
		readTrialLessonRequest: "org.read_trial_lesson_request",
		readTrialLessonAnswer: "org.read_trial_lesson_answer",
		updateTrialLesson: "org.update_trial_lesson",
		sendTrialLessonRequest: "org.send_trial_lesson_request",
		answerTrialLessonRequest: "org.answer_trial_lesson_request",

		// update
		updateScheduleGroup: "org.update_schedule_group_info",
		deleteScheduleGroup: "org.delete_schedule_group",
		updateScheduleForGroups: "org.update_schedule_for_groups",
		updateGroupMark: "org.set_group_mark",
		updateGroupMarks: "org.get_groups_marks",
		updateGeneral: "org.update_general",
		updateContacts: "org.update_contacts",
		getSettingsFees: "org.get_settings_fees",
		getMembershipData: "org.get_membership_data",
		deleteFeeVariant: "org.delete_fee_variant",
		saveFeeVariant: "org.save_fee_variant",
		updateFee: "org.update_fee",
		createMembershipPaymentCheckout: "org.create_fee_checkout",
		payMembershipFeeStripe: "org.pay_membership_fee_stripe",
		confirmUserMembership: "org.confirm_user_membership",
		cancelUserMembership: "org.cancel_user_membership",
		updateAdminMembershipFeePaidout: "org.updateAdminMembershipFeePaidout",
		updatePermissions: "org.update_permissions",

		addMembershipFee: "org.add_membership_fee",
		updateMember: "org.update_club_member",
		getMemberInfo: "org.get_member_info",
		updateClubAddress: "org.update_address",
		updateClubCurrency: "org.update_currency",
		// ACTIONS
		follow: "org.follow",
		unfollow: "org.unfollow",

		sendPackageRequest: "org.send_package_request",
		// addPackage: "org.add_package",
		addPackage2: "org.add_package2",
		savePackage2: "org.save_package2",
		getBuyPackageInfo: "org.get_buy_package_info",
		createPackageCheckout: "org.create_package_checkout",
		getPackageCheckout: "org.get_package_checkout",
		payForPackageStripeV3: "org.pay_package_stripe_v3",
		payForPackageFreeV2: "org.pay_package_free_v2",
		payForPackageManual: "org.pay_package_manual",

		getPackageUserData: "org.get_package_user_data",

		KICK_CLUB_FROM_CLUB: "org.kick_club_from_club",
		KICK_USER_FROM_CLUB: "org.kick_user_from_club",
		LEAVE_CLUB_BY_USER: "org.leave_club_by_user",
		LEAVE_CLUB_BY_CLUB: "org.leave_club_by_club",
		SEND_JOIN_CLUB_TO_CLUB: "org.send_join_club_to_club",
		CANCEL_JOIN_CLUB_TO_CLUB: "org.cancel_join_club_to_club",
		CANCEl_JOIN_REQUEST: "org.cancel_join_request",
		JOIN_CLUB: "org.send_join_request",
		//posts
		loadPosts: "org.get_posts",
	},

	ACTIONS: {
		CLUB: {},
	},
	USER: {
		// get
		// delete
		// add

		authRegister: "user.auth_register",
		addFamilyMember: "user.add_family_member",
		getFamilyMembers: "user.get_family_members",
		getFriends: "user.get_friends",
		getMembership: "user.get_membership",
		getEvents: "user.get_events",
		followUser: "user.follow_user",
		sendFamilyRequest: "user.send_family_request",
		unfollowUser: "user.unfollow_user",
		// uppdate
		getProfileSettings: "user.get_user_profile_settings",
		getFavorites: "user.get_favorites",
		updateSocials: "user.update_socials",
		updateLinks: "user.update_links",
		updateGeneral: "user.update_general",
		updateProfileLink: "user.update_profile_link",
		updateProfileAddress: "user.update_profile_address",
		sendCoachRequest: "user.send_coach_request",
		cancelCoachRequest: "user.cancel_coach_request",
		getCoachingInfo: "user.get_coaching_info",
		getUserTeam: "user.get_user_team",
		deleteProfile: "user.delete_profile",
		kickFromTeam: "user.kick_from_team",
		updatePermissions: "user.update_permissions",
		getPaymentMethods: "user.get_payment_methods",
		addForm: "user.add_form",
		getFormsForCopy: "user.get_copy_forms",
		updateLanguage: "user.updateLanguage",
	},
	SPORT: {
		getById: "sport.get_by_id",
		getAll: "sport.get_all",
	},
	PLACES: {
		getPlaceById: "places.get_place_by_id",
		getPlaceByGoogleId: "places.get_google_place_byid",
	},
	SEARCH: {
		byMap: "search.bymap",
		byUsers: "search.byusers",
		byClubs: "search.byclubs",
		byEvents: "search.byevents",
		familyMembers: "search.family_members",
		byClubUsers: "search.byclubusers",
	},
	FEATURES: {
		getPageByLink: "features.getPageByLink",
		addClubViews: "features.add_club_view",
		addEventViews: "features.add_event_views",
	},
	NOTIFICATION: {
		submitNotification: "notification.submit",
		getUserNotifications: "user.get_notifications",
		getClubNotifications: "org.get_notifications",
	},
	MESSAGER: {
		// get
		getDialogs: "messager.get_dialogs",
	},
	AUTH: {
		googleLogin: "auth.google_login",
		googleRegister: "auth.google_register",
		getRestorePasswordCode: "auth.get_restore_password_code",
		confirmRestorePasswordCode: "auth.confirm_restore_password_code",
		updateRestorePassword: "auth.update_restore_password",
	},
	PAYMENTS: {
		authorizeStripe: "payments.authorizeStripe",
		updatePaymentMethod: "payments.updatePaymentMethod",
		getCreatedPaymentMethods: "payments.getCreatedPaymentMethods",
	},
};
