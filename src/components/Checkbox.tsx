export default function Checkbox(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      type="checkbox"
      className="w-6 h-6 rounded-md focus:ring-0 checked:bg-secondary focus:ring-offset-0 border-gray-300 border-[0.5px] hover:cursor-pointer hover:border-gray-400 hover:checked:bg-secondary-light"
      {...props}
    />
  );
}
