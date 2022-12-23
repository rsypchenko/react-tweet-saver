export const TextField = ({ handleChange, text, loading, error }) => {
  return (
    <input
      onChange={handleChange}
      value={text}
      type="text"
      className={`flex w-64 sm:w-96 border-2 border-gray-300 rounded-lg p-2 shadow-xl outline-none ${
        error ? "border-red-300" : ""
      }`}
      placeholder="Search tweets..."
      disabled={loading}
    />
  );
};
