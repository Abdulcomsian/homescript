export default function LabledInput({ inputData }) {
  return (
    <div className={`mb-3 ${inputData.wrapperClassName}`}>
      <label htmlFor={inputData.id} className="form-label">
        {inputData.label}
      </label>
      <input
        type={inputData.type}
        className={`form-control ${inputData.inputClassName}`}
        id={inputData.id}
        placeholder={inputData.placeholder}
        name={inputData.name}
      />
    </div>
  );
}
