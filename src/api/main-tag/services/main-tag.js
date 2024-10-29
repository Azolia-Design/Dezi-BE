'use strict';

/**
 * main-tag service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-tag.main-tag');
