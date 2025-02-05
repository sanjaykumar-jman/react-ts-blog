import React from "react";
import { X } from "lucide-react";

interface PopupProps {
  title: string;
  content: string;
}

export default function Popup({ title, content }: PopupProps) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn">
          <X size={24} />
        </button>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}
