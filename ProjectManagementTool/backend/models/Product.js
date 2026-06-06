const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
{
title: {
type: String,
required: true,
},
description: {
type: String,
},
status: {
type: String,
default: "Pending",
},
deadline: {
type: Date,
},
},
{
timestamps: true,
}
);

module.exports = mongoose.model("Project", projectSchema);
