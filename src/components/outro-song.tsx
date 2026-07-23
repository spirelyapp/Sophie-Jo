"use client";

import { useEffect, useRef } from "react";

const DEFAULT_TRACK_ID = "4kP69y3GKHi9tXckfgp4bK";
const DEFAULT_START_AT_SECONDS = 12;
const SCRIPT_ID = "spotify-iframe-api";
const SCRIPT_SRC = "https://open.spotify.com/embed/iframe-api/v1";

type Controller = {
  addListener: (
    event: "playback_update",
    cb: (e: { data: { isPaused: boolean; position: number } }) => void,
  ) => void;
  seek: (seconds: number) => void;
};

type IFrameAPI = {
  createController: (
    el: HTMLElement,
    options: { uri: string; width: string; height: number },
    cb: (controller: Controller) => void,
  ) => void;
};

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: IFrameAPI) => void;
    __spotifyIframeApi?: IFrameAPI;
  }
}

type OutroSongProps = {
  trackId?: string;
  startAtSeconds?: number;
};

export default function OutroSong({
  trackId = DEFAULT_TRACK_ID,
  startAtSeconds = DEFAULT_START_AT_SECONDS,
}: OutroSongProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let seeked = false;

    const setup = (IFrameAPI: IFrameAPI) => {
      window.__spotifyIframeApi = IFrameAPI;
      if (!ref.current) return;
      IFrameAPI.createController(
        ref.current,
        {
          uri: `spotify:track:${trackId}`,
          width: "100%",
          height: 152,
        },
        (controller) => {
          controller.addListener("playback_update", (e) => {
            if (
              startAtSeconds > 0 &&
              !seeked &&
              !e.data.isPaused &&
              e.data.position < startAtSeconds * 1000
            ) {
              controller.seek(startAtSeconds);
              seeked = true;
            }
          });
        },
      );
    };

    if (window.__spotifyIframeApi) {
      setup(window.__spotifyIframeApi);
      return;
    }

    window.onSpotifyIframeApiReady = setup;

    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
  }, [trackId, startAtSeconds]);

  return (
    <div className="max-w-md">
      <div ref={ref} />
    </div>
  );
}
