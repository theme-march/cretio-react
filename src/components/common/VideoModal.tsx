import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = "hidden";
            (window as any).__lenis?.stop();
        } else {
            document.body.style.overflow = "";
            (window as any).__lenis?.start();
        }
        return () => {
            document.body.style.overflow = "";
            (window as any).__lenis?.start();
        };
    }, [isOpen]);

    if (!mounted) return null;

    const getEmbedUrl = (url: string) => {
        if (url.includes("youtube.com/watch?v=")) {
            return url.replace("watch?v=", "embed/");
        }
        return url;
    };

    return createPortal(
        <div 
            className={`ak-video-modal-overlay ${isOpen ? "open" : ""}`}
            onClick={onClose}
        >
            <div 
                className="ak-video-modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="ak-video-modal-close" onClick={onClose}>
                    &times;
                </button>
                {isOpen && (
                    <iframe
                        src={`${getEmbedUrl(videoUrl)}?autoplay=1`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
        </div>,
        document.body
    );
};

export default VideoModal;
