interface MyButtonProps {
  label: string;
  onClick: () => void; // Function prop
  color?: string;
}

export default function MyButton({
  label,
  onClick,
  color = "blue",
}: MyButtonProps) {
  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-600",
    red: "bg-red-500 hover:bg-red-600",
    green: "bg-green-500 hover:bg-green-600",
  };

  return (
    <button
      onClick={onClick} // Call the function prop when clicked
      className={`px-4 py-2 rounded-lg text-white font-semibold ${colorClasses[color as keyof typeof colorClasses]} transition-colors`}
    >
      {label}
    </button>
  );
}
