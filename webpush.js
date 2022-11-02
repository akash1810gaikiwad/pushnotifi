const webpush = require('web-push');

// let vapid = webpush.generateVAPIDKeys() 
// console.log(vapid)
// VAPID keys should only be generated only once.
const vapidKeys = {
    publicKey: 'BNlaj7xwPtL3FA6PsPOsf3fmnjbHFDSu_ErSh7AHGhzZJ25OZSV8hXXLVp3AzctvD3T672ZDceicdZrS7RoUhco',
    privateKey: 'cgeIs1Y-mpwr9nwVtDrX_bd3YIy5JfdU0cgXO2tu4gY'
};

webpush.setVapidDetails(
  'akg6595@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
