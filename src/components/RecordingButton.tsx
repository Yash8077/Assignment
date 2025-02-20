"use client"

import { useRef } from "react"
import { MicrophoneIcon, StopIcon } from "@heroicons/react/24/solid"
import React from "react"

export default function RecordingButton({
  isRecording,
  setIsRecording,
  onTranscriptionComplete,
}) {
  const mediaRecorder = useRef<MediaRecorder | null>(null)

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaRecorder.current = new MediaRecorder(stream)
      mediaRecorder.current.start()
      setIsRecording(true)
    } catch (err) {
      console.error("Error accessing the microphone", err)
    }
  }

  const stopRecording = () => {
    if (mediaRecorder.current) {
      mediaRecorder.current.stop()
      setIsRecording(false)

      // Simulate transcription delay
      setTimeout(() => {
        onTranscriptionComplete("Let's schedule a meeting next Monday at 10 AM.")
      }, 3000)
    }
  }

  return (
    <button
      className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg ${
        isRecording ? "bg-red-500" : "bg-blue-500"
      } text-white`}
      onClick={isRecording ? stopRecording : startRecording}
    >
      {isRecording ? <StopIcon className="h-6 w-6" /> : <MicrophoneIcon className="h-6 w-6" />}
    </button>
  )
}
