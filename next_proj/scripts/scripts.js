'use strict'

document.addEventListener('click', (event) => {
    if (event.target === document.getElementById("video_button_icon") || event.target === document.getElementById("video_play_icon") || event.target === document.getElementById("video_icon_path")) {
        if (!document.getElementById("video_item").paused) {
            document.getElementById("video_item").pause();
        } else {
            document.getElementById("video_item").play();
        }
    }
})