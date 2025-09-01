import React from "react";

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="relative w-full max-w-3xl bg-white rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-2xl font-bold z-10"
        >
          ×
        </button>
        <video
          src="/assets/videos/cyna-presentation.mp4"
          controls
          autoPlay
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}