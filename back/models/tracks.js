const mongoose = require('mongoose');
const { Schema } = mongoose;

const AlbumSchema = new Schema({
    // name: { type: String, required: true },
    // position: { type: String, required: true },
    // office: { type: String, required: true },
    // salary: { type: Number, required: true }

    album: { type: Schema.Types.Mixed },
    artists: { type: [Schema.Types.Mixed] },
    available_markets: { type: [String] },
    disc_number: { type: Number },
    duration_m: { type: Number },
    explicit: { type: Boolean },
    external_ids: { type: Object },
    external_urls: { type: Object },
    href: { type: String },
    id: { type: String },
    is_local: { type: Boolean },
    name: { type: String },
    popularity: { type: Number },
    preview_url: { type: String },
    track_number: { type: Number },
    type: { type: String },
    uri: { type: String }

});

module.exports = mongoose.model('Album', AlbumSchema);