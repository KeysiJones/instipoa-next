const CardsWrapper = ({ children }: any) => (
  <div
    className={`lg:px-8 lg:grid lg:grid-flow-row lg:[grid-template-columns:repeat(3,0.6fr)]`}
    // style={{ gridTemplateColumns: 'repeat(3,0.6fr)' }}
  >
    {children}
  </div>
);

export { CardsWrapper };
