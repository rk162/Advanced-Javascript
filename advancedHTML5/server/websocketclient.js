export default class WebSocketClient {
    constructor() {
        this.ws = new WebSocket('ws://localhost:8080')
    }
    connect() {
        $('form').addEventListener('submit', () => {
            let name = $('#name').value;
            let message = $('#message').value;
            this.ws.send(JSON.stringify({ name: name, message: message }));
            return false;
        })
        this.ws.onmessage = (e) => {
            let li = $('<li></li>')
            li.append(document.createTextNode(e.data));
            $('#messages').append(li)
        }
        this.ws.oneror = (e) => {
            let li = $('<li></li>')
            let span = $('<span></span>')
                (span).append('Error' + e.data);
            li.append(span)
            $('#messages').append(li);
        }
    }
}