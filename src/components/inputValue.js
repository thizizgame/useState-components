export function InputValue({ label, value, onChange, error,type }) {
  return (
    <div>
      {label} * <br/>
      <input
        className="mt-2 w-[100%] border-1 border-[#CBD5E1] h-[44px] rounded-[5px] pl-[13px] focus:outline-none focus:ring-0 focus:border-[#0CA5E9]"
        placeholder="Placeholder"
        value={value}
        onChange={onChange}
        type={type}
      ></input>
      {error !== "" ? (
        <p className="mt-2 text-red-400">{error}</p>
      ) : (
        <p></p>
      )}
    </div>
  );
}
