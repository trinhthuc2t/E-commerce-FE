// WebSocketContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

import Stomp from 'stompjs';
const WebSocketContext = createContext();

export function useWebSocket() {
    return useContext(WebSocketContext);
}

export function WebSocketProvider({ children }) {
    const [webSocket, setWebSocket] = useState(null);

    useEffect(options => {
        const socket = new WebSocket("ws://localhost:8080/ws/websocket");
        const stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            setWebSocket(stompClient);
            if (stompClient.connected) {
                stompClient.subscribe('/message', function (message) {
                    // Xử lý tin nhắn ở đây và gửi thông tin thông qua Context
                });
            }
        });

        return () => {
            // Đóng kết nối WebSocket khi component unmounts
            if (webSocket) {
                webSocket.disconnect();
            }
        };
    }, []);

    return (
        <WebSocketContext.Provider value={webSocket}>
            {children}
        </WebSocketContext.Provider>
    );
}
