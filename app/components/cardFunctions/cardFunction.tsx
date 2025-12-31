import React from "react";

function Card({
  title,
  children,
  rightAction,
  className,
  style,
}: {
  title: string;
  children: React.ReactNode;
  rightAction?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`bg-white rounded-xl border p-5 flex flex-col ${
        className || ""
      }`}
      style={style}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium">{title}</h2>
        {rightAction}
      </div>
      <div className="flex-1">{children}</div>{" "}
      {/* ensures content fills height */}
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between text-sm mb-3">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

export { Card, InfoRow };
