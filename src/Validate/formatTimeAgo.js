// eslint-disable-next-line no-unused-vars
import React from "react";

const formatTimeAgo = (targetDate) => {
    const currentDate = new Date();
    const timeDifference = currentDate - targetDate;

    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (minutes < 1) {
        return "vài giây trước";
    } else if (minutes < 60) {
        return `${minutes} phút trước`;
    } else if (hours < 24) {
        return `${hours} giờ trước`;
    } else if (days < 30) {
        return `${days} ngày trước`;
    } else {
        const formattedDate = targetDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
        });
        return `Ngày ${formattedDate}`;
    }
};



export { formatTimeAgo };
