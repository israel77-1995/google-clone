import React from "react";
import ProfilePic from "./ProfilePic";

export const ActionArea = () => {
    return (
        <div className="action-area">
            <div className="icon-group">
                <span className="material-symbols-outlined">refresh</span>
                <span className="material-symbols-outlined">view_agenda</span>
                <span className="material-symbols-outlined">settings</span>
            </div>
            <div className="icon-group">
                <span className="material-symbols-outlined">apps</span>
                <ProfilePic />
            </div>
        </div>
    );
};