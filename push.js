const push = require('web-push');

const keys = {
    publicKey: 'BLOu3y8vnytQZn4a5cyvdTNXpAzKpnmxSFgxel3PIdPG1IRU1BhsKkahfA4Zx5xp8w6g6SFqehkeOOW0QzOLsaY',
    privateKey: 'oJHKFCq5Lan-wS2tYeE_1w9dYefmZGwydgFKa6eqiQM'
};

push.setVapidDetails('mailto:test@test.com', keys.publicKey, keys.privateKey)

let sub = {endpoint:"https://fcm.googleapis.com/fcm/send/dP0zM8k7uhM:APA91bEnQKINPKn7z7diMViq4VM5WDHlWimM7d4u0dkZKc2KwyMGp7x5n_cufW6T5LamI2-YRRzxjOOlaV7LhKJ4HBfoA4HovTaiKN0mS2c3kxSfufRa4YNRevj3nHxG6M_4X8fPVFBV",expirationTime:null,keys:{p256dh:"BHqQlLaO_6ghYNXQo-uRkzNFfL9p9EZ6q3CIZ-ZUJxJgQYJN8p_pLVZqZ8x-PK5kQkPWiKm_OOcri5azlTkT5ng",auth:"VHO6h1FLiOQm2jlQ7SLIuA"}}

push.sendNotification(sub, 'title');