const router = require('express').Router();
let questions = require('../data/questions.json');
const MAX_TEAMS = 6;

const score = [0, 0, 0, 0, 0, 0];

let teams = 0;
let round = 0;

const getId = (req, resp, next) => {
    if(teams < MAX_TEAMS){
        teams++;
        resp.json(teams);
    }
    else
        resp.json('Invalid Request!');
}

const serveQuestion = (req, resp, next) => {

}

const submitAnswer = (req, resp, next) => {

}

const getLeaderboard = (req, resp, next) => {

}

router.get('/id', getId);
router.post('/submit', submitAnswer);
router.post('/questions', serveQuestion);
router.get('/leaderboard', getLeaderboard);

module.exports = router;