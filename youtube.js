registerPlugin({
    name: 'Youtube Webinterface!',
    version: '1.0',
    description: 'Youtube Webinterface for playing and queuing YouTube Tracks.',
    author: ' MaxS <info@schmitt-max.com>',
    vars: {},
    enableWeb: true
}, function(sinusbot,config, info){
sinusbot.log("YTWeb Webinterface Ready");
    sinusbot.on('api:ytplay', function(ev) {
    sinusbot.log('YTWeb Triggered with "played" at '+ ev.data);    
        return 'The Video will be sucessfully played now.';
        
});
    sinusbot.on('api:ytenq', function(ev) {
    sinusbot.log('YTWeb Triggered with "enque" at '+ ev.data);    
        return 'The Video will be sucessfully enqueued now.';   
        
});
    sinusbot.on('api:ytdl', function(ev) {
    sinusbot.log('YTWeb Triggered with "downloaded" at '+ ev.data); 
        return 'The Video will be sucessfully downloaded now.';
        
});
});