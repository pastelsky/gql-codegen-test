// @flow

import * as Types from "../types";

export type TagsFragment = {
  __typename?: "MarketplaceApp",
  appId: any,
  appKey: string,
  listingStatus: Types.MarketplaceListingStatus,
  productHostingOptions: Array<Types.AtlassianProductHostingType>,
  tagline?: ?string,
  privacyPolicyUrl?: ?string,
  isAtlassianCommunityEnabled: boolean,
  partner?: ?{
    __typename?: "MarketplacePartner",
    id: any,
    partnerType?: ?Types.MarketplacePartnerType,
    address?: ?{
      __typename?: "MarketplacePartnerAddress",
      line1?: ?string,
      line2?: ?string,
      city?: ?string,
      state?: ?string,
      country?: ?string,
      postalCode?: ?string,
    },
    support?: ?{
      __typename?: "MarketplacePartnerSupport",
      contactDetails?: ?{
        __typename?: "MarketplacePartnerSupportContact",
        emailId?: ?string,
        phoneNumber?: ?string,
        websiteUrl?: ?string,
      },
      availability?: ?{
        __typename?: "MarketplacePartnerSupportAvailability",
        daysOfWeek: Array<string>,
        startTime?: ?string,
        endTime?: ?string,
        timezone?: ?string,
        holidays: Array<{
          __typename?: "MarketplacePartnerSupportHoliday",
          title: string,
          holidayFrequency: Types.MarketplacePartnerSupportHolidayFrequency,
          date: string,
        }>,
      },
    },
    programs?: ?{
      __typename?: "MarketplacePartnerPrograms",
      isCloudAppSecuritySelfAssessmentDone?: ?boolean,
    },
  },
};
