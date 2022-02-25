import "./container.scss";

const Container = ({ children, style, className }) => {
  return (
    <div className="main__container">
      <div className={className} style={style}>
        {children}
      </div>
    </div>
  );
};

export default Container;
