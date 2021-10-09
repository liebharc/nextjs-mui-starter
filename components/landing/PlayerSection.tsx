import React, { FC } from 'react'
import ReactPlayer from 'react-player'

interface Props {
    url: string
    onInteraction(type: string, value: string): void
}

const ReferencesSection: FC<Props> = ({ url, onInteraction }) => {
    return (
        <ReactPlayer
            url={url}
            controls={true}
            light={true}
            onStart={() => {
                onInteraction('video', 'start')
            }}
            onPlay={() => {
                onInteraction('video', 'play')
            }}
            onProgress={(e) => {
                onInteraction('video', e.playedSeconds + ' seconds')
            }}
            onPause={() => {
                onInteraction('video', 'pause')
            }}
            onEnded={() => {
                onInteraction('video', 'ended')
            }}
        />
    )
}

export default ReferencesSection
