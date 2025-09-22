interface AlertMessageProps {
  message: string;
  type: "error" | "success";
}

export function AlertMessage({ message, type }: AlertMessageProps) {
  const bgColor =
    type === "error"
      ? "bg-red-500 text-white"
      : "bg-green-500 text-white";

  return (
    <div className={`${bgColor} px-4 py-3 rounded-lg mt-4 text-center font-semibold`}>
      {message}
    </div>
  );
}
