export const SubmitButton = ({ loading }) => {
  return (
    <input
      type="submit"
      className="px-4 py-2 ml-2 rounded-lg shadow-xl cursor-pointer hover:shadow-2xl hover:bg-slate-600 bg-slate-700 text-white transition-all"
      value={loading ? "Loading..." : "Search"}
      disabled={loading}
    ></input>
  );
};
