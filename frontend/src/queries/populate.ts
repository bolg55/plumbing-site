export const homePageQuery = {
  populate: {
    Hero: {
      populate: '*',
    },
  },
};
