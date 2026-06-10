export default {
  async fetch() {
    const response = await fetch(
      "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=pomolowww&api_key=4e13fba4aa6b576ff66113ec4dc392ae&format=json&limit=1"
    );

    const data = await response.json();
    const track = data.recenttracks.track[0];

    return Response.json({
      label: "Last.FM Last Played Song",
      message: `${track.name} - ${track.artist["#text"]}`,
      schemaVersion: 1
    });
  }
};
