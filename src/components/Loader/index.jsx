import { motion } from "framer-motion";
import './index.css'

const WildlifeLoader = () => {
    return (
        <div id="loading-wrapper">
            <div id="loading-text">Tracking Wildlife...</div>
            <div id="loading-content">
                <div class="paw"></div>
                <div class="paw"></div>
                <div class="paw"></div>
                <div class="paw"></div>
            </div>
        </div>

    );
};

export default WildlifeLoader;
