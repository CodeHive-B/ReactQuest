import { useState } from "react";
import Message from "../Message";

const ConditionalRendering = () => {
    const [isVisible, setIsVisible] = useState(false);
    const status = 'success'
    
    return (
        <div>
            <h1>
                {status === "loading"
                ? "Loading..."
                : status === "success"
                    ? "Data loaded successfully"
                    : "Error loading data"
                }
            </h1>
            <Message />
            <button onClick={() => setIsVisible(!isVisible) }>
                {isVisible ? "Hide" : "Show" } Details
            </button>

            {(isVisible === true) && 1+1 === 2 && <p>This is the extra content that appears when clicked.</p>}
        </div>
    )
}

export default ConditionalRendering;