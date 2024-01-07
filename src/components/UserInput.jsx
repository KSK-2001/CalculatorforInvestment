
export default function UserInput({investment,onhandleChange}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input
            type="number"
            required
            value={investment.initialInvestment}
            onChange={(event) =>
              onhandleChange("initialInvestment", event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>Annual investment</label>
          <input
            type="number"
            required
            value={investment.annualInvestment}
            onChange={(event) =>
              onhandleChange("annualInvestment", event.target.value)
            }
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            type="number"
            required
            value={investment.expectedReturn}
            onChange={(event) =>
              onhandleChange("expectedReturn", event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={investment.duration}
            onChange={(event) => onhandleChange("duration", event.target.value)}
          ></input>
        </p>
      </div>
    </section>
  );
}
