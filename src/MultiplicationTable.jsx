export default function MultiplicationTable({ number }) {
  return (
    <section className="multiplication-table">
      <h3>Tabuada do {number}</h3>
      {Array.from({ length: 11 }, (_, index) => index).map((multiplier) => (
        <p key={multiplier}>{`${number} x ${multiplier} = ${number * multiplier}`}</p>
      ))}
    </section>
  );
}