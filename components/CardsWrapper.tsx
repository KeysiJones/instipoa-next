const CardsWrapper = ({ children, cols = 4 }: any) => (
  <div
    className={`lg:px-8 lg:grid lg:grid-flow-row lg:grid-cols-${cols}`}
    // style={{ gridTemplateColumns: 'repeat(3,0.6fr)' }}
  >
    {children}
  </div>
);

export { CardsWrapper };
