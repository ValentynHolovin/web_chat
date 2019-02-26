const SockJS = require('sockjs-client');
const Stomp = require('stompjs');



export const connectWebSocket = () => {
    let socket = new SockJS('/web_socket');
    let stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        stompClient.subscribe('/topic/public', function(messageOutput) {
            console.log(JSON.parse(messageOutput.body));
        });
    });
};