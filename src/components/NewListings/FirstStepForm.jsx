import LabledInput from "../common/input/LabledInput";

export default function FirstStepForm({ dataInputs }) {
  return (
    <>
      {dataInputs.map((data) => (
        <LabledInput inputData={data} />
      ))}
    </>
  );
}
