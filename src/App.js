import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');  // Connect to the server

function App() {
    const [commentary, setCommentary] = useState('');

    useEffect(() => {
        // Listen for commentary updates from the server
        socket.on('commentaryUpdate', (newCommentary) => {
            setCommentary(newCommentary);
        });

        return () => {
            socket.off('commentaryUpdate');
        };
    }, []);

    return (
        <div>
            <h1>Live Cricket Commentary</h1>
            <div>
                <p>{commentary}</p>
            </div>
        </div>
    );
}

export default App;
