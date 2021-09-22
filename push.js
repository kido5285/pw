const push = require('web-push');

const keys = {
    publicKey: 'BLOu3y8vnytQZn4a5cyvdTNXpAzKpnmxSFgxel3PIdPG1IRU1BhsKkahfA4Zx5xp8w6g6SFqehkeOOW0QzOLsaY',
    privateKey: 'oJHKFCq5Lan-wS2tYeE_1w9dYefmZGwydgFKa6eqiQM'
};

push.setVapidDetails('mailto:test@test.com', keys.publicKey, keys.privateKey)

let sub ={"endpoint":"https://fcm.googleapis.com/fcm/send/e_60xXICXHU:APA91bFzkEw3LLhymRx3fVWRaM-954Xw5tbsY_qB07fZFpHoomqZheoNaRIy8xD-awnBCCgEGcY4YaR7bb7IuwQFowKJP1FRN9L2wNh1g7KRToENKvpKalY-HpbSSVJSkJ9GEyWFIfpe","expirationTime":null,"keys":{"p256dh":"BNPi16gVZu6IJyWg-aU6YnxLbsuum71Lv7GTbeYIkHdaWYh7qYjwAv-6YmqIEmUBDEYoHUFATs3EfbUizKrwu2w","auth":"kpKPvmDDd80_lwOeu90aLw"}}

push.sendNotification(sub, 'title');