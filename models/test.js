var mongoose = require('mongoose');
var crypto = require('crypto');
var logger = require('../helpers/logger');
var Schema = mongoose.Schema;
var CreateUpdatedAt = require('mongoose-timestamp');

// Define Test Schema
var Test = new Schema({
    section: [{
        content: String,
        purpose: String,
        parts: [{
            purpose: String,
            content: String,
            questions: [{
                content: String,
                type: String,
                answers: [],
                right_answer: String
            }]
        }]
    }]
});

Test.plugin(CreateUpdatedAt);
