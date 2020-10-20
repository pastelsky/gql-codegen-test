/* @flow */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: tags
// ====================================================

export type tags_partner_address = {
  +__typename: "MarketplacePartnerAddress",
  /**
   * Line 1 of Marketplace Partner’s address
   */
  +line1: ?string,
  /**
   * Line 2 of Marketplace Partner’s address
   */
  +line2: ?string,
  /**
   * City of Marketplace Partner’s address
   */
  +city: ?string,
  /**
   * State of Marketplace Partner’s address
   */
  +state: ?string,
  /**
   * Country of Marketplace Partner’s address
   */
  +country: ?string,
  /**
   * Postal code of Marketplace Partner’s address
   */
  +postalCode: ?string,
};

export type tags_partner_support_contactDetails = {
  +__typename: "MarketplacePartnerSupportContact",
  /**
   * Marketplace Partner’s support contact email id
   */
  +emailId: ?string,
  /**
   * Marketplace Partner’s support contact phone number
   */
  +phoneNumber: ?string,
  /**
   * Marketplace Partner’s support website URL
   */
  +websiteUrl: ?string,
};

export type tags_partner_support_availability_holidays = {
  +__typename: "MarketplacePartnerSupportHoliday",
  /**
   * Holiday’s title
   */
  +title: string,
  /**
   * Tells whether it occurs one time or is annual.
   */
  +holidayFrequency: MarketplacePartnerSupportHolidayFrequency,
  /**
   * Support holiday date, follows ISO date format `YYYY-MM-DD` e.g, 2020-08-12
   */
  +date: string,
};

export type tags_partner_support_availability = {
  +__typename: "MarketplacePartnerSupportAvailability",
  /**
   * Days of week when Marketplace Partner support is available.
   */
  +daysOfWeek: $ReadOnlyArray<string>,
  /**
   * Support availability start time, in ISO time format `hh:mm` e.g, 23:25
   */
  +startTime: ?string,
  /**
   * Support availability end time, in ISO time format `hh:mm` e.g, 23:25
   */
  +endTime: ?string,
  /**
   * Support availability timezone for startTime and endTime values. e.g, “America/Los_Angeles”
   */
  +timezone: ?string,
  /**
   * Dates on which MarketplacePartner’s support is not available due to holiday
   */
  +holidays: $ReadOnlyArray<tags_partner_support_availability_holidays>,
};

export type tags_partner_support = {
  +__typename: "MarketplacePartnerSupport",
  /**
   * Marketplace Partner’s support contact details
   */
  +contactDetails: ?tags_partner_support_contactDetails,
  /**
   * Marketplace Partner’s support availability details
   */
  +availability: ?tags_partner_support_availability,
};

export type tags_partner_programs = {
  +__typename: "MarketplacePartnerPrograms",
  +isCloudAppSecuritySelfAssessmentDone: ?boolean,
};

export type tags_partner = {
  +__typename: "MarketplacePartner",
  /**
   * Unique id of a Marketplace Partner.
   */
  +id: any,
  /**
   * Marketplace Partner’s address
   */
  +address: ?tags_partner_address,
  /**
   * Marketplace Partner support information
   */
  +support: ?tags_partner_support,
  /**
   * Marketplace Programs that this Marketplace Partner has participated in.
   */
  +programs: ?tags_partner_programs,
  /**
   * Tells if the Marketplace partner is an Atlassian’s internal one.
   */
  +partnerType: ?MarketplacePartnerType,
};

export type tags = {
  +__typename: "MarketplaceApp",
  /**
   * A numeric identifier for an app in marketplace.
   */
  +appId: any,
  /**
   * A human-readable identifier for an app in marketplace.
   */
  +appKey: string,
  /**
   * Marketplace Partner that provided this app in Marketplace.
   */
  +partner: ?tags_partner,
  /**
   * Status of app’s listing in Marketplace.
   */
  +listingStatus: MarketplaceListingStatus,
  /**
   * Atlassian product hosting types compatible with this app
   */
  +productHostingOptions: $ReadOnlyArray<AtlassianProductHostingType>,
  /**
   * A short phrase that summarizes what the app does.
   */
  +tagline: ?string,
  /**
   * Link to a statement explaining how the app uses and secures user data.
   */
  +privacyPolicyUrl: ?string,
  /**
   * When enabled providing customers with a place to ask questions or browse answers about the app.
   */
  +isAtlassianCommunityEnabled: boolean,
};/* @flow */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * Tells whether support is on holiday only one time or if it repeats annually.
 */
export type MarketplacePartnerSupportHolidayFrequency = "ANNUAL" | "ONE_TIME";

/**
 * Tells if the Marketplace partner is an Atlassian’s internal one.
 */
export type MarketplacePartnerType = "ATLASSIAN_INTERNAL";

/**
 * Status of app’s listing in Marketplace.
 */
export type MarketplaceListingStatus = "PRIVATE" | "PUBLIC" | "READY_TO_LAUNCH" | "REJECTED" | "SUBMITTED";

/**
 * Hosting type where Atlassian product instance is installed.
 */
export type AtlassianProductHostingType = "CLOUD" | "DATA_CENTER" | "SERVER";

//==============================================================
// END Enums and Input Objects
//==============================================================