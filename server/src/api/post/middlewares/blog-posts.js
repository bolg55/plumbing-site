"use strict";

/**
 * `blog-posts` middleware
 */

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    ctx.query.populate = {
      coverImg: {
        fields: ["name", "alternativeText", "caption", "url"],
      },
      authors: {
        fields: ["firstname"],
        populate: {
          role: {
            fields: ["name"],
          },
        },
      },
    };
    await next();
  };
};
