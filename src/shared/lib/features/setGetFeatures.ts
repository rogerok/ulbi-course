import { FeatureFlags } from 'shared/types/featureFlags';

let feautureFlags: FeatureFlags;

export const setFeatureFlags = (newFeatureFlags?: FeatureFlags) => {
  if (newFeatureFlags) {
    feautureFlags = newFeatureFlags;
  }
};

export const getFeatureFlags = (flag: keyof FeatureFlags) =>
  feautureFlags?.[flag];
