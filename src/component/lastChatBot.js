import { Button, Link } from '@mui/material';
import React from 'react'

function lastChatBot() {

    const handleSucessScreen = () => {
        console.log("successScreen");
    }

    const handlefaliurescreen = () => {
        console.log("faliureScreen");
    }

    return (
        <div >
            <div sx={{ marginBottom: 2 }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSucessScreen}
                    sx={{ marginBottom: 2 }}
                ><Link href="successscreen" color="warning">Success Screen</Link>
                </Button>
            </div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handlefaliurescreen}
                    sx={{ marginBottom: 2 }}
                ><Link href="failurescreen" color="warning">Failure Screen</Link>
                </Button>
            </div>
        </div>
    )
}

export default lastChatBot;
