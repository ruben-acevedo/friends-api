const service = require("./service/service");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// getByName
app.get("/api/episodes/name/:name", async (req, res) => {
  const result = await service.getByName(req.params.name);
  res.json(result);
});

// getBySeasonAndEpisode
app.get("/api/episodes/episode/:season/:episode", async (req, res) => {
  const result = await service.getBySeasonAndEpisode(
    parseInt(req.params.season),
    parseInt(req.params.episode)
  );
  res.json(result);
});

// getBySeason
app.get("/api/episodes/season/:season", async (req, res) => {
  const result = await service.getBySeason(parseInt(req.params.season));
  res.json(result);
});

// getByYear
app.get("/api/episodes/year/:year", async (req, res) => {
  const result = await service.getByYear(parseInt(req.params.year));
  res.json(result);
});

app.listen(PORT, () => console.log(`Server up at ${PORT}`));
