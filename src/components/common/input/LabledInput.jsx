export default function LabledInput({ inputData }) {
  return (
    <div class={`mb-3 ${inputData.wrapperClassName}`}>
      <label for={inputData.id} class="form-label">
        {inputData.label}
      </label>
      <input
        type={inputData.type}
        class={`form-control ${inputData.inputClassName}`}
        id={inputData.id}
        placeholder={inputData.placeholder}
      />
    </div>
  );
}
