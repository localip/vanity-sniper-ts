declare interface User {
	verified: boolean,
	username: string,
	purchased_flags: number,
	public_flags: number,
	pronouns: string,
	premium_type: number,
	premium: boolean,
	phone: string | null,
	nsfw_allowed: boolean,
	mobile: boolean,
	mfa_enabled: boolean,
	id: string,
	global_name: string,
	flags: number,
	email: string,
	discriminator: string,
	desktop: boolean,
	bio: string,
	banner_color: string | null,
	banner: string | null,
	avatar_decoration_data: string | null,
	avatar: string | null,
	accent_color: string | null;
}

declare interface Guild {
	afk_channel_id: string | null,
	public_updates_channel_id: string | null,
	explicit_content_filter: number,
	vanity_url_code: string | null,
	afk_timeout: number,
	home_header: null,
	embedded_activities: any[],
	latest_onboarding_question_id: string | null,
	id: string,
	discovery_splash: string | null,
	mfa_level: number,
	name: string,
	presences: any,
	application_command_counts: any,
	stage_instances: any[],
	system_channel_flags: number,
	soundboard_sounds: any[],
	lazy: boolean,
	premium_subscription_count: number,
	threads: any[],
	application_id: null,
	region: string,
	preferred_locale: string,
	max_members: number,
	premium_progress_bar_enabled: boolean,
	rules_channel_id: string | null,
	description: string | null,
	premium_tier: number,
	max_stage_video_channel_users: number,
	splash: null,
	incidents_data: null,
	member_count: number,
	guild_scheduled_events: any[],
	voice_states: any[],
	owner_id: string | null,
	icon: string | null,
	nsfw_level: number,
	features: any[],
	system_channel_id: string | null,
	roles: any[],
	hub_type: string | number | null,
	members: any[],
	inventory_settings: null,
	channels: any[],
	emojis: any[],
	max_video_channel_users: number,
	nsfw: boolean,
	banner: string | null,
	joined_at: string,
	large: boolean,
	stickers: any[],
	version: number,
	safety_alerts_channel_id: string | null,
	default_message_notifications: number,
	verification_level: number;
}