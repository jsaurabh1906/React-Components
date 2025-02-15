import ButtonLayout from "./ReusableItems/ButtonLayout";

const GradientButton = ({ label }) => (
  <ButtonLayout
    info="Used in modern UI designs to attract user attention."
    heading="Gradient & Glassmorphism Button"
  >
    <button className="px-4 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-indigo-500 via-blue-700 to-sky-500 hover:opacity-90 border-b-2  border-sky-400 hover:border-sky-500">
      {label ?? "Submit"}
    </button>
  </ButtonLayout>
);

export default GradientButton;
