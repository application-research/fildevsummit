export enum BlockTypeEnum {
  COLLAPSABLE = 'collapsable',
  COLLAPSABLES = 'collapsables',
  HERO = 'hero',
  HERO_NO_BACKGROUND = 'hero-no-background',
  IMAGE_TEXT = 'image-text',
  IMAGE_TEXT_WITH_OVERFLOW = 'image-text-with-overflow',
  LOGO_GRID = 'logo-grid',
  MEDIA = 'media',
  MEDIA_GRID = 'media-grid',
  MEDIA_GRID_SCROLLABLE = 'media-grid-scrollable',
  SCHEDULE = 'schedule',
  SCHEDULE_ICELAND = 'schedule-iceland',
  SCHEDULE_SINGAPORE = 'schedule-singapre',
  SCHEDULE_ETHDENVER = 'schedule-ethdenver',
  SCHEDULE_ETHBRUSSELS = 'schedule-ethbrussels',
  SCHEDULE_LIST_TOGGLE_BY_TRACK_TALK_ICELAND = 'schedule-list-toggle-by-talk-track-iceland',
  SCHEDULE_LIST_BY_TRACK_ICELAND = 'schedule-list-by-track-iceland',
  SCHEDULE_LIST_BY_TALK_ICELAND = 'schedule-list-by-talk-iceland',
  SCHEDULE_LIST_TOGGLE_BY_TRACK_TALK_SINGAPORE = 'schedule-list-toggle-by-talk-track-singapore',
  SCHEDULE_LIST_TOGGLE = 'schedule-list-toggle',
  SCHEDULE_LIST_BY_TRACK_SINGAPORE = 'schedule-list-by-track-singapore',
  SCHEDULE_LIST_BY_TALK_SINGAPORE = 'schedule-list-by-talk-singapore',
  SPEAKERS = 'speakers',
  TABLE = 'table',
  TEXT = 'text',
  TICKET_CARD = 'ticket-card',
  UPCOMING_EVENTS = 'upcoming-events',
}

export enum LocationEnum {
  SINGAPORE = 'singapore',
  ICELAND = 'iceland',
}

export enum BlockDirectionEnum {
  COLUMN = 'column',
  FOUR_COLUMN = 'four-column',
  ROW = 'row',
  THREE_COLUMN = 'three-column',
  TWO_COLUMN = 'two-column',
}

export interface Image {
  altText: string;
  ariaLabel?: string | null;
  caption?: string | null;
  src: string;
}

export enum MediaType {
  IMAGE_GIF = 'image/gif',
  IMAGE_JPG = 'image/jpeg',
  IMAGE_PNG = 'image/png',
  IMAGE_WEBP = 'image/webp',
  VIDEO_MP4 = 'video/mp4',
  VIDEO_QUICKTIME = 'video/quicktime',
}

export enum Ratio {
  CAROUSEL = 'carousel',
  ELEVEN_BY_FOUR = '11 / 4',
  FOUR_BY_THREE = '4 / 3',
  ONE_BY_ONE = '1 / 1',
  ORIGINAL = 'original',
  SIXTEEN_BY_NINE = '16 / 9',
  THREE_BY_FOUR = '3 / 4',
  TWENTY_ONE_BY_NINE = '21 / 9',
}

export enum TypeName {
  MEDIA_IMAGE = 'media-image',
  MEDIA_IMAGE_ICON = 'media-image-icon',
  MEDIA_IMAGE_WITH_TEXT = 'media-image-with-text',
  MEDIA_ROW = 'media-row',
  MEDIA_VIDEO = 'media-video',
  IMAGE_TEXT_WITH_OVERFLOW = 'image-text-with-overflow',
  IMAGE_WITH_OVERLAY_TEXT = 'image-with-overlay-text',
}

export interface Video {
  autoplay?: boolean;
  controls?: boolean;
  height?: number;
  loop?: boolean;
  mime?: MediaType.VIDEO_MP4 | MediaType.VIDEO_QUICKTIME;
  muted?: boolean;
  poster?: string;
  src: string;
  width?: number;
}

export enum CallToActionVariantEnum {
  BLACK = 'dark-blue',
  BORDER = 'border',
  BUTTON = 'button',
  ICON = 'icon',
  LINK = 'link',
  LINK_ICON = 'link-icon',
  NO_BORDER = 'no-border',
  TEXT = 'text',
  WHITE = 'white',
}

export enum NavigationTypeEnum {
  WITH_BORDER = 'with-border',
}

export enum ScheduleStatusEnum {
  ACCEPTED_BY_TRACK_LEAD = 'Accepted by track lead',
  CONFIRMED = 'Confirmed',
}

export enum TrackOrTalkEnum {
  TRACK = 'Track',
  TALK = 'Talk',
}
