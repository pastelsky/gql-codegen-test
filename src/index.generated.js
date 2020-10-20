// @flow

import * as Types from './types';

import type { TagsFragment } from './App2/App.generated';

export type FullQueryVariables = {
  appId: $ElementType<Types.Scalars, 'MarketplaceAppId'>,
};


export type FullQuery = { marketplaceApp?: ?(
    { __typename?: 'MarketplaceApp' }
    & TagsFragment
  ) };


const a: FullQuery = {
  marketplaceApp: {
    __typename: 33
  }
}
